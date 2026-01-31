import { loadDictionary, getReplaceEntries, getHoverEntries } from '../dictionary/loader';
import { startObserver, stopObserver } from './observer';
import { isReplaceEnabled, replaceAll, setEnabled, setReplaceEntries } from './replacer';
import { setHoverEntries, setHoverEnabled } from './hover';

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

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.gittohabu_enabled) {
      const enabled = changes.gittohabu_enabled.newValue;
      if (typeof enabled !== 'boolean') {
        return;
      }
      setEnabled(enabled);
      setHoverEnabled(enabled);

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
