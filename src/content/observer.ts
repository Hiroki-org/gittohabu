import { replaceTextInElement } from './replacer';

let observer: MutationObserver | null = null;

/**
 * MutationObserver を開始
 * 動的に追加されるコンテンツも置換対象にする
 */
export function startObserver(): void {
  if (observer) return;

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      // 追加されたノードに対して置換を実行
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          replaceTextInElement(node as Element);
        } else if (node.nodeType === Node.TEXT_NODE) {
          // テキストノードが直接追加された場合
          const parent = node.parentElement;
          if (parent) {
            replaceTextInElement(parent);
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

/**
 * MutationObserver を停止
 */
export function stopObserver(): void {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}
