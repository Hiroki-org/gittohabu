const TOOLTIP_STYLE_ID = 'gittohabu-tooltip-style';

export function ensureTooltipStyles(): void {
  if (document.getElementById(TOOLTIP_STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = TOOLTIP_STYLE_ID;
  style.textContent = `
    #gittohabu-tooltip {
      position: fixed;
      z-index: 9999;
      max-width: 300px;
      padding: 8px 12px;
      background: #24292f;
      color: #ffffff;
      border-radius: 6px;
      font-size: 12px;
      line-height: 1.5;
      box-shadow: 0 8px 24px rgba(140,149,159,0.2);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
    }
  `;
  (document.head ?? document.documentElement).appendChild(style);
}
