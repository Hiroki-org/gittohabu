const ENABLED_KEY = 'gittohabu_enabled';

const toggle = document.getElementById('enabled-toggle') as HTMLInputElement | null;
const statusPill = document.getElementById('status-pill');
const statusText = document.getElementById('status-text');
const openOptionsButton = document.getElementById('open-options');
const hotReloadButton = document.getElementById('hot-reload') as HTMLButtonElement | null;

/**
 * GitHubタブにメッセージを送信
 */
async function sendMessageToGitHubTabs(message: {
  type: string;
  enabled?: boolean;
}): Promise<void> {
  try {
    const tabs = await chrome.tabs.query({ url: 'https://github.com/*' });
    for (const tab of tabs) {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, message).catch(() => {
          // タブがまだコンテンツスクリプトをロードしていない場合は無視
        });
      }
    }
  } catch (error) {
    console.warn('[gittohabu] タブへのメッセージ送信に失敗:', error);
  }
}

function renderStatus(enabled: boolean): void {
  if (toggle) {
    toggle.checked = enabled;
  }
  if (statusPill) {
    statusPill.textContent = enabled ? 'ON' : 'OFF';
    statusPill.classList.toggle('is-off', !enabled);
  }
  if (statusText) {
    statusText.textContent = enabled ? '有効' : '無効';
  }
}

function loadStatus(): void {
  chrome.storage.local.get(ENABLED_KEY, (result) => {
    if (chrome.runtime.lastError) {
      renderStatus(true);
      return;
    }
    const enabled = result[ENABLED_KEY];
    renderStatus(typeof enabled === 'boolean' ? enabled : true);
  });
}

toggle?.addEventListener('change', () => {
  if (!toggle) {
    return;
  }
  const enabled = toggle.checked;
  chrome.storage.local.set({ [ENABLED_KEY]: enabled }, () => {
    if (chrome.runtime.lastError) {
      console.error(
        '[gittohabu] 設定の保存に失敗しました:',
        chrome.runtime.lastError.message,
      );
      alert('設定を保存できませんでした。もう一度お試しください。');
      loadStatus();
      return;
    }
    renderStatus(enabled);
    // 即座にGitHubタブに反映
    sendMessageToGitHubTabs({ type: 'toggle', enabled });
  });
});

hotReloadButton?.addEventListener('click', async () => {
  if (!hotReloadButton) return;

  // ボタンを一時的に無効化
  hotReloadButton.disabled = true;
  hotReloadButton.textContent = '⏳ 再読み込み中...';

  try {
    await sendMessageToGitHubTabs({ type: 'hotReload' });
    hotReloadButton.textContent = '✅ 完了!';
    setTimeout(() => {
      hotReloadButton.disabled = false;
      hotReloadButton.textContent = '🔄 再読み込み';
    }, 1000);
  } catch (error) {
    console.error('[gittohabu] ホットリロードに失敗:', error);
    hotReloadButton.textContent = '❌ 失敗';
    setTimeout(() => {
      hotReloadButton.disabled = false;
      hotReloadButton.textContent = '🔄 再読み込み';
    }, 1000);
  }
});

openOptionsButton?.addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    chrome.tabs.create({ url: chrome.runtime.getURL('src/options/index.html') });
  }
});

loadStatus();

chrome.storage.onChanged.addListener((changes) => {
  if (changes[ENABLED_KEY]) {
    const nextValue = changes[ENABLED_KEY].newValue;
    if (typeof nextValue === 'boolean') {
      renderStatus(nextValue);
    }
  }
});
