import type { ReplaceEntry } from '../dictionary/schema';

/** 現在の言語設定 */
let currentLang = 'ja';

/** 正規表現用のエスケープ */
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 有効な置換エントリ (バリデーション済み)
 */
type ValidReplaceEntry = {
  entry: ReplaceEntry;
  urlPattern?: RegExp;
};

/**
 * コンパイル済みの置換グループ
 * 同じ正規表現フラグを持つエントリをまとめて1つの正規表現にする
 */
type ReplaceGroup = {
  /** 結合された正規表現 (例: /foo|bar|baz/g) */
  regex: RegExp;
  /**
   * 置換マップ
   * Key: マッチした文字列 (caseSensitive=falseの場合は小文字化)
   * Value: 置換後の文字列
   */
  replacements: Map<string, string>;
  /** 大文字小文字を区別するか */
  caseSensitive: boolean;
};

/** バリデーション済みのエントリ一覧 */
let validEntries: ValidReplaceEntry[] = [];

/**
 * 有効なエントリのキャッシュを管理するクラス
 */
class ReplacementCache {
  private activeGroups: ReplaceGroup[] = [];
  private cachedUrl: string | null = null;
  // 言語設定が変更された場合もキャッシュを無効化する必要があるため、言語も追跡する
  private cachedLang: string | null = null;

  /**
   * キャッシュを無効化
   */
  invalidate(): void {
    this.cachedUrl = null;
    this.cachedLang = null;
    this.activeGroups = [];
  }

  /**
   * 現在のURLと言語設定に適用可能なエントリグループを取得
   */
  get(allEntries: ValidReplaceEntry[], currentUrl?: string): ReplaceGroup[] {
    const url = currentUrl ?? window.location.href;

    // URLと言語が変わっていなければキャッシュを返す
    if (this.cachedUrl === url && this.cachedLang === currentLang) {
      return this.activeGroups;
    }

    // 1. 現在のURLにマッチするエントリをフィルタリング
    const activeEntries = allEntries.filter(
      (c) => !c.urlPattern || c.urlPattern.test(url),
    );

    // 2. 部分一致の問題を防ぐため、長い文字列順にソート
    activeEntries.sort((a, b) => b.entry.from.length - a.entry.from.length);

    // 3. caseSensitive ごとにグループ化
    const sensitiveEntries: ValidReplaceEntry[] = [];
    const insensitiveEntries: ValidReplaceEntry[] = [];

    for (const item of activeEntries) {
      if (item.entry.caseSensitive === false) {
        insensitiveEntries.push(item);
      } else {
        sensitiveEntries.push(item);
      }
    }

    // 4. グループごとに正規表現とマップを作成
    const nextGroups: ReplaceGroup[] = [];

    // Sensitiveを先に処理する
    if (sensitiveEntries.length > 0) {
      nextGroups.push(this.compileGroup(sensitiveEntries, true));
    }
    if (insensitiveEntries.length > 0) {
      nextGroups.push(this.compileGroup(insensitiveEntries, false));
    }

    this.activeGroups = nextGroups;
    this.cachedUrl = url;
    this.cachedLang = currentLang;

    return this.activeGroups;
  }

  /**
   * エントリリストから正規表現グループを作成
   */
  private compileGroup(entries: ValidReplaceEntry[], caseSensitive: boolean): ReplaceGroup {
    const replacements = new Map<string, string>();
    const patterns: string[] = [];

    for (const item of entries) {
      const from = item.entry.from;
      const key = caseSensitive ? from : from.toLowerCase();

      if (!replacements.has(key)) {
        const to = item.entry.to[currentLang];
        if (to) {
          replacements.set(key, to);
          patterns.push(escapeRegExp(from));
        }
      }
    }

    // パターンを | で結合
    const source = patterns.join('|');
    const flags = caseSensitive ? 'g' : 'gi';

    return {
      regex: new RegExp(source, flags),
      replacements,
      caseSensitive,
    };
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
 * 置換エントリを設定
 */
export function setReplaceEntries(entries: ReplaceEntry[]): void {
  // エントリの事前検証とURLパターンのコンパイルのみ行う
  const nextEntries: ValidReplaceEntry[] = [];

  for (const entry of entries) {
    // from がない、あるいは空文字の場合はスキップ
    if (!entry.from) continue;

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

    nextEntries.push({
      entry,
      urlPattern,
    });
  }

  validEntries = nextEntries;
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
  if (currentLang !== lang) {
    currentLang = lang;
    // 言語が変わったらキャッシュを無効化して再コンパイルが必要
    entryCache.invalidate();
  }
}

/**
 * 単一のテキストノードに対して置換を実行
 */
export function replaceTextNode(node: Text, currentUrl?: string): void {
  if (!isEnabled) return;

  // 元のテキストを保持（初回のみ）
  if (!originalTextMap.has(node)) {
    originalTextMap.set(node, node.textContent ?? '');
  }

  const originalText = originalTextMap.get(node);
  if (!originalText) return;

  let text = originalText;
  let modified = false;

  // キャッシュされたグループを取得（URLと言語に基づいて生成される）
  const groups = entryCache.get(validEntries, currentUrl);

  for (const group of groups) {
    // 正規表現のlastIndexをリセット
    group.regex.lastIndex = 0;

    // マッチするか確認（replace内でコールバックを使う）
    // NOTE: replaceはマッチした部分を置換していくため、非重複かつ最長一致（ソート済みのため）で置換される
    const replaced = text.replace(group.regex, (match) => {
      const key = group.caseSensitive ? match : match.toLowerCase();
      return group.replacements.get(key) ?? match;
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
export function replaceTextInElement(element: Element | Document, currentUrl?: string): void {
  if (!isEnabled) return;
  const url = currentUrl ?? window.location.href;

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
    replaceTextNode(currentNode as Text, url);
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
  replaceTextInElement(rootElement, window.location.href);
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
