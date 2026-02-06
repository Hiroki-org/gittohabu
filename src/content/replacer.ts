import type { ReplaceEntry } from '../dictionary/schema';

/** 現在の言語設定 */
let currentLang = 'ja';

type ReplacementGroup = {
  /** The merged regex pattern for all entries in this group */
  pattern: RegExp;
  /** Map from matched string (normalized if case-insensitive) to the Entry */
  replacements: Map<string, ReplaceEntry>;
  /** URL filtering pattern (if any) */
  urlPattern?: RegExp;
  /** Whether this group is case sensitive (helper for map lookup) */
  caseSensitive: boolean;
};

/** 置換対象のエントリ一覧 */
let compiledGroups: ReplacementGroup[] = [];

/**
 * 有効なエントリのキャッシュを管理するクラス
 */
class ReplacementCache {
  private activeGroups: ReplacementGroup[] = [];
  private cachedUrl: string | null = null;

  /**
   * キャッシュを無効化
   */
  invalidate(): void {
    this.cachedUrl = null;
    this.activeGroups = [];
  }

  /**
   * 現在のURLに適用可能なエントリを取得
   */
  get(allGroups: ReplacementGroup[]): ReplacementGroup[] {
    const currentUrl = window.location.href;
    if (this.cachedUrl === currentUrl) {
      return this.activeGroups;
    }

    this.activeGroups = allGroups.filter(
      (g) => !g.urlPattern || g.urlPattern.test(currentUrl),
    );
    this.cachedUrl = currentUrl;
    return this.activeGroups;
  }
}

const entryCache = new ReplacementCache();

/** 元のテキストを保持するマップ (WeakMapでメモリリークを防ぐ) */
const originalTextMap = new WeakMap<Text, string>();

/** 置換済みのテキストノードを追跡 */
const replacedNodes = new Set<WeakRef<Text>>();

/** 置換が有効かどうか */
let isEnabled = true;

/**
 * 正規表現用のエスケープ
 */
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 置換エントリを設定
 */
export function setReplaceEntries(entries: ReplaceEntry[]): void {
  // Group entries by urlPattern + caseSensitive
  const groups = new Map<string, {
    entries: ReplaceEntry[];
    urlPattern?: string;
    caseSensitive: boolean;
  }>();

  for (const entry of entries) {
    const key = `${entry.urlPattern || ''}::${entry.caseSensitive !== false}`;
    if (!groups.has(key)) {
      groups.set(key, {
        entries: [],
        urlPattern: entry.urlPattern,
        caseSensitive: entry.caseSensitive !== false,
      });
    }
    groups.get(key)!.entries.push(entry);
  }

  const nextGroups: ReplacementGroup[] = [];

  for (const groupData of groups.values()) {
    try {
      let urlPattern: RegExp | undefined;
      if (groupData.urlPattern) {
        try {
          urlPattern = new RegExp(groupData.urlPattern);
        } catch (error) {
          console.warn(
            '[gittohabu] urlPatternの正規表現が無効です:',
            groupData.urlPattern,
            error,
          );
          continue;
        }
      }

      const flags = groupData.caseSensitive ? 'g' : 'gi';
      const replacements = new Map<string, ReplaceEntry>();
      const patterns: string[] = [];

      for (const entry of groupData.entries) {
        try {
          // Use original order
          const escaped = escapeRegExp(entry.from);
          patterns.push(escaped);

          const key = groupData.caseSensitive ? entry.from : entry.from.toLowerCase();
          // To preserve loop behavior for exact duplicates, we use the FIRST entry.
          if (!replacements.has(key)) {
            replacements.set(key, entry);
          }
        } catch (error) {
          console.warn(
             '[gittohabu] エントリの処理に失敗しました:',
             entry,
             error
          );
        }
      }

      if (patterns.length === 0) continue;

      const masterPatternSource = `(${patterns.join('|')})`;
      const masterPattern = new RegExp(masterPatternSource, flags);

      nextGroups.push({
        pattern: masterPattern,
        replacements,
        urlPattern,
        caseSensitive: groupData.caseSensitive,
      });

    } catch (error) {
      console.error('[gittohabu] グループのコンパイルに失敗しました', error);
    }
  }

  compiledGroups = nextGroups;
  // キャッシュをクリア
  entryCache.invalidate();
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

  // 元のテキストを保持（初回のみ）
  if (!originalTextMap.has(node)) {
    originalTextMap.set(node, node.textContent ?? '');
  }

  const originalText = originalTextMap.get(node);
  if (!originalText) return;

  let text = originalText;
  let modified = false;

  const activeGroups = entryCache.get(compiledGroups);

  for (const group of activeGroups) {
    group.pattern.lastIndex = 0;

    const replaced = text.replace(group.pattern, (match) => {
      const key = group.caseSensitive ? match : match.toLowerCase();
      const entry = group.replacements.get(key);
      // In theory, if regex matched, entry must exist.
      // But if multiple entries map to same regex (e.g. "foo" and "Foo" in case-insensitive),
      // key normalization handles it.
      if (!entry) return match;

      const replacement = entry.to[currentLang];
      return replacement !== undefined ? replacement : match;
    });

    if (replaced !== text) {
      text = replaced;
      modified = true;
    }
  }

  if (modified && text !== node.textContent) {
    node.textContent = text;
    // 重複チェック：既にこのノードが追跡されているか確認
    const isAlreadyTracked = Array.from(replacedNodes).some((weakRef) => weakRef.deref() === node);
    if (!isAlreadyTracked) {
      replacedNodes.add(new WeakRef(node));
    }
  }
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

  let currentNode: Node | null;
  while ((currentNode = walker.nextNode())) {
    replaceTextNode(currentNode as Text);
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

/**
 * 置換したテキストを元に戻す
 */
export function restoreAll(): void {
  // 追跡しているノードを巡回して元のテキストに戻す
  for (const weakRef of replacedNodes) {
    const node = weakRef.deref();
    if (node && originalTextMap.has(node)) {
      const original = originalTextMap.get(node);
      if (original !== undefined && node.textContent !== original) {
        node.textContent = original;
      }
    }
  }
  replacedNodes.clear();
  console.log('[gittohabu] テキストを元に戻しました');
}

/**
 * キャッシュをクリアして再適用（ホットリロード）
 */
export function hotReload(): void {
  console.log('[gittohabu] ホットリロード開始...');

  // 一旦全ての置換を元に戻す
  restoreAll();

  // WeakMapのエントリもクリア（新しいノードとして扱う）
  // WeakMapは直接クリアできないので、replacedNodesをクリアするだけで十分

  // 有効な場合は再度置換を実行
  if (isEnabled) {
    // 少し遅延させてDOMの更新を待つ
    requestAnimationFrame(() => {
      replaceAll();
      console.log('[gittohabu] ホットリロード完了');
    });
  } else {
    // 無効な場合も完了ログを出力
    console.log('[gittohabu] ホットリロード完了');
  }
}
