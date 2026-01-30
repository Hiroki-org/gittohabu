import type { ReplaceEntry } from '../dictionary/schema';

/** 現在の言語設定 */
let currentLang = 'ja';

type CompiledReplaceEntry = {
  entry: ReplaceEntry;
  urlPattern?: RegExp;
  fromPattern: RegExp;
};

/** 置換対象のエントリ一覧 */
let compiledEntries: CompiledReplaceEntry[] = [];

/** 現在のURLに適用可能なエントリのキャッシュ */
let activeEntries: CompiledReplaceEntry[] = [];
let cachedUrl: string | null = null;

/** 置換が有効かどうか */
let isEnabled = true;

/**
 * 置換エントリを設定
 */
export function setReplaceEntries(entries: ReplaceEntry[]): void {
  // エントリ登録時に正規表現をコンパイルして再利用する
  const nextEntries: CompiledReplaceEntry[] = [];
  for (const entry of entries) {
    try {
      const flags = entry.caseSensitive === false ? 'gi' : 'g';
      let urlPattern: RegExp | undefined;
      if (entry.urlPattern) {
        try {
          urlPattern = new RegExp(entry.urlPattern);
        } catch (error) {
          console.warn(
            '[gittohabu] urlPatternの正規表現が無効です:',
            entry.urlPattern,
            error,
          );
          continue;
        }
      }
      const fromPattern = new RegExp(escapeRegExp(entry.from), flags);
      nextEntries.push({
        entry,
        urlPattern,
        fromPattern,
      });
    } catch (error) {
      console.warn(
        '[gittohabu] fromの正規表現が無効です:',
        entry.from,
        error,
      );
    }
  }
  compiledEntries = nextEntries;
  // キャッシュをクリア
  cachedUrl = null;
  activeEntries = [];
}

/**
 * 現在のURLに適用可能なエントリを取得
 */
function getActiveEntries(): CompiledReplaceEntry[] {
  const currentUrl = window.location.href;
  if (cachedUrl === currentUrl) {
    return activeEntries;
  }

  activeEntries = compiledEntries.filter(
    (c) => !c.urlPattern || c.urlPattern.test(currentUrl),
  );
  cachedUrl = currentUrl;
  return activeEntries;
}

/**
 * 置換の有効/無効を切り替え
 */
export function setEnabled(enabled: boolean): void {
  isEnabled = enabled;
}

export function isReplaceEnabled(): boolean {
  return isEnabled;
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
export function replaceTextNode(node: Text): void {
  if (!isEnabled) return;

  let text = node.textContent;
  if (!text) return;

  let modified = false;

  const entries = getActiveEntries();

  for (const compiled of entries) {
    const replacement = compiled.entry.to[currentLang];
    if (!replacement) continue;

    compiled.fromPattern.lastIndex = 0;
    const replaced = text.replace(compiled.fromPattern, () => replacement);
    if (replaced !== text) {
      text = replaced;
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
          tagName === 'input' ||
          parent.isContentEditable
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
  const rootElement = document.body ?? document.documentElement;
  if (!rootElement) {
    console.warn('[gittohabu] 置換対象のルート要素が見つかりません。');
    return;
  }
  replaceTextInElement(rootElement);
}
