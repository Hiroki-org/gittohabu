import { hideTooltip, showTooltip } from './tooltip';

document.querySelectorAll('.btn-primary').forEach((btn) => {
  btn.addEventListener('mouseenter', (e: MouseEvent) => {
    if (!(e.ctrlKey || e.metaKey)) {
      return;
    }
    showTooltip({
      anchor: e.currentTarget as HTMLElement,
      title: 'Create pull request',
      text: 'プルリクエストを作成するボタンです．変更をレビュー依頼したい時に使います．',
    });
  });
      title: 'Create pull request',
      text: 'プルリクエストを作成するボタンです．変更をレビュー依頼したい時に使います．',
    });
  });
  btn.addEventListener('mouseleave', () => {
    hideTooltip();
  });
});
