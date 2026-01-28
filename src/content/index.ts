import { loadDictionary, getReplaceEntries } from '../dictionary/loader';
import { startObserver, stopObserver } from './observer';
import { replaceAll, setEnabled, setReplaceEntries } from './replacer';
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

  // TODO: Hiroki-org/gittohabu#2 ツールチップUI実装と統合
  document.querySelectorAll('.btn-primary').forEach((btn) => {
    btn.addEventListener('mouseenter', (e: MouseEvent) => {
      if (!(e.ctrlKey || e.metaKey)) {
        return;
      }
      const anchor = e.currentTarget;
      if (!(anchor instanceof HTMLElement)) {
        return;
      }
      showTooltip({
        anchor,
        title: 'Create pull request',
        text: 'プルリクエストを作成するボタンです．変更をレビュー依頼したい時に使います．',
      });
    });
    btn.addEventListener('mouseleave', () => {
      hideTooltip();
    });
  });

  console.log('[gittohabu] Initialized with', replaceEntries.length, 'replace entries');
}

function loadEnabledState(): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      chrome.storage.local.get('gittohabu_enabled', (result) => {
        if (chrome.runtime.lastError) {
          console.warn('[gittohabu] storage error:', chrome.runtime.lastError);
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
  });
}

start().catch((error) => {
  console.error('[gittohabu] Failed to initialize:', error);
});
