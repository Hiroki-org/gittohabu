import { replaceTextInElement, replaceTextNode } from './replacer';

let observer: MutationObserver | null = null;
let pendingNodes = new Set<Node>();
let scheduled = false;

function flushPendingNodes(): void {
  scheduled = false;

  // スナップショットパターン: 現在のノードをローカル変数にコピーし、新しいミューテーションを収集するために再初期化
  const currentPending = pendingNodes;
  pendingNodes = new Set<Node>();

  const nodes = Array.from(currentPending);
  // 祖先要素がcurrentPendingに含まれている場合は、親の処理でカバーされるため除外する
  const filteredNodes = nodes.filter((node) => {
    // 切断されたノードはスキップ
    if (!node.isConnected) {
      return false;
    }
    let parent = node.parentNode;
    // document.bodyで早期終了して不要な走査を削減
    while (parent && parent !== document.body) {
      if (currentPending.has(parent)) {
        return false;
      }
      parent = parent.parentNode;
    }
    // document.body自体もチェック
    if (parent === document.body && currentPending.has(document.body)) {
      return false;
    }
    return true;
  });

  for (const node of filteredNodes) {
    // 処理前に再度接続状態を確認
    if (!node.isConnected) continue;

    if (node.nodeType === Node.ELEMENT_NODE) {
      replaceTextInElement(node as Element);
    } else if (node.nodeType === Node.TEXT_NODE) {
      const textNode = node as Text;
      const parent = textNode.parentElement;
      if (
        parent &&
        !parent.isContentEditable &&
        !parent.closest('script,style,textarea,input')
      ) {
        replaceTextNode(textNode);
      }
    }
  }
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
