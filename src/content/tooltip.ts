import type { TooltipConfig, TooltipPosition } from '../types';
import { ensureTooltipStyles } from './styles';

const TOOLTIP_ID = 'gittohabu-tooltip';
const TOOLTIP_OFFSET = 8;

function createTooltipElement(): HTMLDivElement {
  const el = document.createElement('div');
  el.id = TOOLTIP_ID;
  return el;
}

function calculatePosition(anchor: HTMLElement, tooltip: HTMLElement): TooltipPosition {
  const anchorRect = anchor.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let top = anchorRect.bottom + TOOLTIP_OFFSET;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;

  if (left + tooltipRect.width > viewportWidth - TOOLTIP_OFFSET) {
    left = viewportWidth - tooltipRect.width - TOOLTIP_OFFSET;
  }
  if (left < TOOLTIP_OFFSET) {
    left = TOOLTIP_OFFSET;
  }
  if (top + tooltipRect.height > viewportHeight - TOOLTIP_OFFSET) {
    top = anchorRect.top - tooltipRect.height - TOOLTIP_OFFSET;
  }

  return { top, left };
}

let tooltipElement: HTMLDivElement | null = null;

export function showTooltip(config: TooltipConfig): void {
  if (!tooltipElement) {
    ensureTooltipStyles();
    tooltipElement = createTooltipElement();
    document.body.appendChild(tooltipElement);
  }

  tooltipElement.replaceChildren();

  if (config.title) {
    const strong = document.createElement('strong');
    strong.textContent = config.title;
    tooltipElement.append(strong, document.createElement('br'));
  }

  tooltipElement.append(config.text);

  tooltipElement.style.opacity = '0';
  tooltipElement.style.display = 'block';

  // Force reflow to ensure accurate dimensions
  void tooltipElement.offsetHeight;

  const pos = calculatePosition(config.anchor, tooltipElement);
  tooltipElement.style.top = `${pos.top}px`;
  tooltipElement.style.left = `${pos.left}px`;
  tooltipElement.style.opacity = '1';
}

export function hideTooltip(): void {
  if (tooltipElement) {
    tooltipElement.style.opacity = '0';
    tooltipElement.addEventListener('transitionend', () => {
      // アニメーション中に再度表示された場合を考慮し、opacityを確認
      if (tooltipElement?.style.opacity === '0') {
        tooltipElement.style.display = 'none';
      }
    }, { once: true });
  }
}
