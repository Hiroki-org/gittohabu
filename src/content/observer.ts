import { replaceTextInElement, replaceTextNode } from './replacer';

let observer: MutationObserver | null = null;
let pendingNodes = new Set<Node>();
let scheduled = false;

function flushPendingNodes(): void {
  scheduled = false;
  const currentUrl = window.location.href;

  // スナップショットパターン: 現在のノードをローカル変数にコピーし、新しいミューテーションを収集するために再初期化
  const currentPending = pendingNodes;
  pendingNodes = new Set<Node>();

  const nodes = Array.from(currentPending);

  // 祖先要素のチェック結果をキャッシュするMap
  const ancestorCache = new Map<Node, boolean>();

  // 祖先要素がpendingに含まれているかをチェックするヘルパー関数（メモ化付き）
  function hasPendingAncestor(node: Node | null): boolean {
    if (!node) {
      return false;
    }
    if (ancestorCache.has(node)) {
      return ancestorCache.get(node)!;
    }

    let result = false;
    if (currentPending.has(node)) {
      result = true;
    } else if (node === document.body) {
      // document.body自体がpendingに含まれていない場合（上記チェック済み）、
      // ここで探索終了。bodyの親(null)へ行く必要はない。
      result = false;
    } else {
      result = hasPendingAncestor(node.parentNode);
    }

    ancestorCache.set(node, result);
    return result;
  }

  // 祖先要素がcurrentPendingに含まれている場合は、親の処理でカバーされるため除外する
  const filteredNodes = nodes.filter((node) => {
    // 切断されたノードはスキップ
    if (!node.isConnected) {
      return false;
    }
    // 親から順に祖先をチェック
    return !hasPendingAncestor(node.parentNode);
  });

  // 祖先要素の検証結果をキャッシュ（同じ親を持つ複数のテキストノード対策）
  const parentClosestCache = new WeakMap<Element, boolean>();
  let lastParent: Element | null = null;
  let lastParentIsInvalid = false;

  for (const node of filteredNodes) {
    // 処理前に再度接続状態を確認
    if (!node.isConnected) continue;

    if (node.nodeType === Node.ELEMENT_NODE) {
      replaceTextInElement(node as Element, currentUrl);
    } else if (node.nodeType === Node.TEXT_NODE) {
      const textNode = node as Text;
      const parent = textNode.parentElement;

      if (parent && !parent.isContentEditable) {
        let isInvalidParent = false;

        // 直前のノードと同じ親要素であればキャッシュヒット（最速パス）
        if (parent === lastParent) {
          isInvalidParent = lastParentIsInvalid;
        } else {
          // Mapキャッシュをチェック
          let cached = parentClosestCache.get(parent);
          if (cached === undefined) {
            // 最も重い処理: DOMツリーを遡及
            cached = parent.closest('script,style,textarea,input') !== null;
            parentClosestCache.set(parent, cached);
          }
          isInvalidParent = cached;
          lastParent = parent;
          lastParentIsInvalid = isInvalidParent;
        }

        if (!isInvalidParent) {
          replaceTextNode(textNode, currentUrl);
        }
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
