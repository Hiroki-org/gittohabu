import type { ReplaceEntry } from '../dictionary/schema';

/** 現在の言語設定 */
let currentLang = 'ja';

/** 置換対象のエントリ一覧 */
let replaceEntries: ReplaceEntry[] = [];

/** 置換が有効かどうか */
let isEnabled = true;

/**
 * 置換エントリを設定
 */
export function setReplaceEntries(entries: ReplaceEntry[]): void {
  replaceEntries = entries;
}

/**
 * 置換の有効/無効を切り替え
 */
export function setEnabled(enabled: boolean): void {
  isEnabled = enabled;
}

/**
 * 現在の言語を設定
 */
export function setLanguage(lang: string): void {
  currentLang = lang;
}

/**
 * 単一のテキストノードに対して置換を実行
 */
function replaceTextNode(node: Text): void {
  if (!isEnabled) return;

  let text = node.textContent;
  if (!text) return;

  let modified = false;

  for (const entry of replaceEntries) {
    // URLパターンがあればチェック
    if (entry.urlPattern) {
      const regex = new RegExp(entry.urlPattern);
      if (!regex.test(window.location.href)) continue;
    }

    const replacement = entry.to[currentLang];
    if (!replacement) continue;

    // 大文字小文字の区別
    const flags = entry.caseSensitive === false ? 'gi' : 'g';
    const pattern = new RegExp(escapeRegExp(entry.from), flags);

    if (pattern.test(text)) {
      text = text.replace(pattern, replacement);
      modified = true;
    }
  }

  if (modified && text !== node.textContent) {
    node.textContent = text;
  }
}

/**
 * 正規表現用のエスケープ
 */
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 指定した要素とその子孫のテキストノードを全て置換
 */
export function replaceTextInElement(element: Element | Document): void {
  if (!isEnabled) return;

  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // スクリプトやスタイル内は除外
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tagName = parent.tagName.toLowerCase();
        if (
          tagName === 'script' ||
          tagName === 'style' ||
          tagName === 'textarea' ||
          tagName === 'input'
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    },
  );

  const textNodes: Text[] = [];
  let currentNode: Node | null;
  while ((currentNode = walker.nextNode())) {
    textNodes.push(currentNode as Text);
  }

  for (const textNode of textNodes) {
    replaceTextNode(textNode);
  }
}

/**
 * ページ全体を置換
 */
export function replaceAll(): void {
  replaceTextInElement(document.body);
}
