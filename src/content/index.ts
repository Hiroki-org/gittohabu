import { loadDictionary, getReplaceEntries, getHoverEntries } from '../dictionary/loader';
import { startObserver, stopObserver } from './observer';
import { isReplaceEnabled, replaceAll, restoreAll, hotReload, setEnabled, setReplaceEntries } from './replacer';
import { setHoverEntries, setHoverEnabled } from './hover';

/** メッセージの型定義 */
interface GittohabulMessage {
  type: 'toggle' | 'hotReload' | 'getStatus';
  enabled?: boolean;
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
