import { loadDictionary, getReplaceEntries } from '../dictionary/loader';
import { startObserver, stopObserver } from './observer';
import { isReplaceEnabled, replaceAll, setEnabled, setReplaceEntries } from './replacer';
import { hideTooltip, showTooltip } from './tooltip';

async function init(): Promise<void> {
  console.log('[gittohabu] Initializing...');

  const dictionary = await loadDictionary();
  const replaceEntries = getReplaceEntries(dictionary);

  setReplaceEntries(replaceEntries);
  const enabled = await loadEnabledState();
  setEnabled(enabled);
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
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const anchor = target.closest('.btn-primary');
    if (!anchor || !(anchor instanceof HTMLElement)) {
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
    const target = e.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const anchor = target.closest('.btn-primary');
    if (!anchor || !(anchor instanceof HTMLElement)) {
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
  setReplaceEntries(replaceEntries);
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

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.gittohabu_enabled) {
      const enabled = changes.gittohabu_enabled.newValue;
      if (typeof enabled !== 'boolean') {
        return;
      }
      setEnabled(enabled);
      if (enabled) {
        replaceAll();
        startObserver();
      } else {
        stopObserver();
      }
    }
    if (changes.gittohabu_user_dictionary) {
      refreshDictionary().catch((error) => {
        console.warn('[gittohabu] 辞書の更新に失敗しました:', error);
      });
    }
  });
}

start().catch((error) => {
  console.error('[gittohabu] Failed to initialize:', error);
});
