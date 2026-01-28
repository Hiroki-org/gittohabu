// ツールチップ関連の型（PR #6 の追加分）
export interface TooltipConfig {
  /** 表示するテキスト */
  text: string;
  /** ツールチップのタイトル（オプション） */
  title?: string;
  /** 表示位置の基準要素 */
  anchor: HTMLElement;
}

export interface TooltipPosition {
  top: number;
  left: number;
}

// 辞書スキーマの re-export（PR #4 で main に追加された分）
export * from '../dictionary/schema';