/**
 * 多言語テキスト
 * キーはISO 639-1言語コード（例: "ja", "en", "zh"）
 */
export type LocalizedText = {
  [langCode: string]: string;
};

/**
 * ホバー解説エントリ
 * 特定のDOM要素にマウスオーバーした時に解説を表示
 */
export interface HoverEntry {
  type: 'hover';
  /** 一意なID（ユーザ編集時の識別用） */
  id: string;
  /** CSSセレクタ（対象要素を特定） */
  selector: string;
  /** 元のラベル（英語，マッチング補助用） */
  originalLabel?: string;
  /** ツールチップのタイトル（多言語） */
  title: LocalizedText;
  /** ツールチップの説明文（多言語） */
  description: LocalizedText;
  /** 対象ページのURLパターン（オプション，正規表現） */
  urlPattern?: string;
}

/**
 * テキスト置換エントリ
 * UI上のテキストを直接書き換え
 */
export interface ReplaceEntry {
  type: 'replace';
  /** 一意なID */
  id: string;
  /** 置換前のテキスト（完全一致） */
  from: string;
  /** 置換後のテキスト（多言語） */
  to: LocalizedText;
  /** 大文字小文字を区別するか（未指定時はtrueとして扱う） */
  caseSensitive?: boolean;
  /** 対象ページのURLパターン（オプション） */
  urlPattern?: string;
}

/**
 * 辞書エントリ（Union型）
 */
export type DictionaryEntry = HoverEntry | ReplaceEntry;

/**
 * 辞書全体の構造
 */
export interface Dictionary {
  /** 辞書のバージョン（セマンティックバージョニング） */
  version: string;
  /** 最終更新日時（ISO 8601） */
  updatedAt: string;
  /** エントリ一覧 */
  entries: DictionaryEntry[];
}
