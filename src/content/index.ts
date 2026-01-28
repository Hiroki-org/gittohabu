import { loadDictionary, getReplaceEntries } from '../dictionary/loader';
import { startObserver, stopObserver } from './observer';
import { replaceAll, setEnabled, setReplaceEntries } from './replacer';
import { hideTooltip, showTooltip } from './tooltip';

async function init(): Promise<void> {
  console.log('[gittohabu] Initializing...');

  const dictionary = await loadDictionary();
  const replaceEntries = getReplaceEntries(dictionary);

  setReplaceEntries(replaceEntries);
  replaceAll();
  startObserver();

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

chrome.storage.onChanged.addListener((changes) => {
  if (changes.gittohabu_enabled) {
    const enabled = changes.gittohabu_enabled.newValue;
    setEnabled(enabled);
    if (enabled) {
      replaceAll();
      startObserver();
    } else {
      stopObserver();
    }
  }
});

init();
