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
