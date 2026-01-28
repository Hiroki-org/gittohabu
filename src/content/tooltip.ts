import type { TooltipConfig, TooltipPosition } from '../types';

const TOOLTIP_ID = 'gittohabu-tooltip';
const TOOLTIP_OFFSET = 8;

function createTooltipElement(): HTMLDivElement {
  const el = document.createElement('div');
  el.id = TOOLTIP_ID;
  el.style.cssText = `
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
  `;
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
    tooltipElement = createTooltipElement();
    document.body.appendChild(tooltipElement);
  }

  if (config.title) {
    tooltipElement.innerHTML = `<strong>${config.title}</strong><br>${config.text}`;
  } else {
    tooltipElement.textContent = config.text;
  }

  tooltipElement.style.opacity = '0';
  tooltipElement.style.display = 'block';

  const pos = calculatePosition(config.anchor, tooltipElement);
  tooltipElement.style.top = `${pos.top}px`;
  tooltipElement.style.left = `${pos.left}px`;
  tooltipElement.style.opacity = '1';
}

export function hideTooltip(): void {
  if (tooltipElement) {
    tooltipElement.style.opacity = '0';
  }
}
