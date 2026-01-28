import { replaceTextInElement, replaceTextNode } from './replacer';

let observer: MutationObserver | null = null;
let pendingNodes = new Set<Node>();
let scheduled = false;

function flushPendingNodes(): void {
  scheduled = false;
  for (const node of pendingNodes) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      replaceTextInElement(node as Element);
    } else if (node.nodeType === Node.TEXT_NODE) {
      replaceTextNode(node as Text);
    }
  }
  pendingNodes.clear();
}

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
        pendingNodes.add(node);
      }
    }
    if (!scheduled && pendingNodes.size > 0) {
      scheduled = true;
      // まとめて処理して高頻度なDOM更新時の負荷を抑える
      queueMicrotask(flushPendingNodes);
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
  pendingNodes.clear();
  scheduled = false;
}
