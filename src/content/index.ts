import { loadDictionary, getReplaceEntries, getHoverEntries } from '../dictionary/loader';
import { startObserver, stopObserver } from './observer';
import { isReplaceEnabled, replaceAll, restoreAll, hotReload, setEnabled, setReplaceEntries } from './replacer';
import { setHoverEntries, setHoverEnabled } from './hover';

/** メッセージの型定義（hotReload と getStatus のみ、toggle は storage.onChanged で処理） */
interface GittohabulMessage {
  type: 'hotReload' | 'getStatus';
}

/** ツールチップ表示用の型定義 */
interface TooltipOptions {
  anchor: Element;
  title: string;
  text: string;
}

let tooltipElement: HTMLDivElement | null = null;

function showTooltip({ anchor, title, text }: TooltipOptions): void {
  hideTooltip();

  tooltipElement = document.createElement('div');
  tooltipElement.style.cssText = `
    position: absolute;
    z-index: 9999;
    background: #24292f;
    color: #fff;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    max-width: 300px;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
    pointer-events: none;
  `;

  const titleEl = document.createElement('div');
  titleEl.style.fontWeight = 'bold';
  titleEl.style.marginBottom = '4px';
  titleEl.textContent = title;

  const textEl = document.createElement('div');
  textEl.textContent = text;

  tooltipElement.appendChild(titleEl);
  tooltipElement.appendChild(textEl);
  document.body.appendChild(tooltipElement);

  const rect = anchor.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();
  tooltipElement.style.left = `${rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2}px`;
  tooltipElement.style.top = `${rect.bottom + window.scrollY + 8}px`;
}

function hideTooltip(): void {
  if (tooltipElement && tooltipElement.parentNode) {
    tooltipElement.parentNode.removeChild(tooltipElement);
    tooltipElement = null;
  }
}

async function init(): Promise<void> {
  console.log('[gittohabu] Initializing...');

  const dictionary = await loadDictionary();
  const replaceEntries = getReplaceEntries(dictionary);
  const hoverEntries = getHoverEntries(dictionary);

  setReplaceEntries(replaceEntries);
  setHoverEntries(hoverEntries);

  const enabled = await loadEnabledState();
  setEnabled(enabled);
  setHoverEnabled(enabled);

  if (enabled) {
    replaceAll();
    startObserver();
  }

  // TODO: https://github.com/Hiroki-org/gittohabu/issues/5 ツールチップUI統合（hover設定の再利用）
  document.addEventListener('mouseover', (e: MouseEvent) => {
    if (!(e.ctrlKey || e.metaKey)) {
      return;
    }
    const target = e.target;
    // Fix: Use Element instead of HTMLElement to support SVG children (icons)
    if (!(target instanceof Element)) {
      return;
    }
    const anchor = target.closest('.btn-primary');
    if (!(anchor instanceof Element)) {
      return;
    }
    // Simulate mouseenter: verify we are not coming from a child
    if (e.relatedTarget instanceof Node && anchor.contains(e.relatedTarget)) {
      return;
    }

    showTooltip({
      anchor,
      title: 'Create pull request',
      text: 'プルリクエストを作成するボタンです．変更をレビュー依頼したい時に使います．',
    });
  });

  document.addEventListener('mouseout', (e: MouseEvent) => {
    if (!tooltipElement) {
      return;
    }
    const target = e.target;
    // Fix: Use Element instead of HTMLElement to support SVG children (icons)
    if (!(target instanceof Element)) {
      return;
    }
    const anchor = target.closest('.btn-primary');
    if (!(anchor instanceof Element)) {
      return;
    }
    // Simulate mouseleave: verify we are not going to a child
    if (e.relatedTarget instanceof Node && anchor.contains(e.relatedTarget)) {
      return;
    }

    hideTooltip();
  });

  console.log('[gittohabu] Initialized with', replaceEntries.length, 'replace entries');
}

async function refreshDictionary(): Promise<void> {
  const dictionary = await loadDictionary();
  const replaceEntries = getReplaceEntries(dictionary);
  const hoverEntries = getHoverEntries(dictionary);

  setReplaceEntries(replaceEntries);
  setHoverEntries(hoverEntries);

  if (isReplaceEnabled()) {
    replaceAll();
  }
}

function loadEnabledState(): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      chrome.storage.local.get('gittohabu_enabled', (result) => {
        if (chrome.runtime.lastError) {
          console.warn(
            '[gittohabu] 設定の読み込みに失敗しました:',
            chrome.runtime.lastError.message,
          );
          resolve(true);
          return;
        }
        const stored = result.gittohabu_enabled;
        resolve(typeof stored === 'boolean' ? stored : true);
      });
    } catch {
      resolve(true);
    }
  });
}

async function start(): Promise<void> {
  await init();

  // ストレージ変更リスナー
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.gittohabu_enabled) {
      const enabled = changes.gittohabu_enabled.newValue;
      if (typeof enabled !== 'boolean') {
        return;
      }
      handleToggle(enabled);
    }
    if (changes.gittohabu_user_dictionary) {
      refreshDictionary().catch((error) => {
        console.warn('[gittohabu] 辞書の更新に失敗しました:', error);
      });
    }
  });

  // メッセージリスナー（hotReload と getStatus のみ処理、toggle は storage.onChanged で十分）
  chrome.runtime.onMessage.addListener(
    (message: GittohabulMessage, _sender, sendResponse) => {
      switch (message.type) {
        case 'hotReload':
          hotReload();
          sendResponse({ success: true });
          break;
        case 'getStatus':
          sendResponse({ enabled: isReplaceEnabled() });
          break;
        default:
          sendResponse({ success: false, error: 'Unknown message type' });
      }
      return true; // 非同期レスポンスを許可
    },
  );
}

/**
 * トグル状態を即座に反映
 */
function handleToggle(enabled: boolean): void {
  setEnabled(enabled);
  setHoverEnabled(enabled);

  if (enabled) {
    replaceAll();
    startObserver();
    console.log('[gittohabu] 有効化しました');
  } else {
    stopObserver();
    restoreAll();
    console.log('[gittohabu] 無効化しました（テキストを元に戻しました）');
  }
}

start().catch((error) => {
  console.error('[gittohabu] Failed to initialize:', error);
});
