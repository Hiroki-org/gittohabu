import { showTooltip, hideTooltip } from './tooltip';
import type { HoverEntry } from '../dictionary/schema';

type CompiledHoverEntry = {
  entry: HoverEntry;
  urlPattern?: RegExp;
};

let compiledEntries: CompiledHoverEntry[] = [];
let isEnabled = false;
let currentLang = 'ja';
let currentAnchor: HTMLElement | null = null;

export function setLanguage(lang: string): void {
  currentLang = lang;
}

function getLocalizedValue(text: { [key: string]: string }): string {
  return text[currentLang] || text['en'] || Object.values(text)[0] || '';
}

function handleMouseOver(e: MouseEvent) {
  if (!isEnabled) return;
  if (!(e.ctrlKey || e.metaKey)) return;

  const target = e.target;
  if (!(target instanceof HTMLElement)) return;

  // Optimization: if we are already in currentAnchor, do nothing
  if (currentAnchor && currentAnchor.contains(target)) {
    return;
  }

  const currentUrl = window.location.href;
  for (const compiled of compiledEntries) {
    // URL pattern check
    if (compiled.urlPattern) {
      if (!compiled.urlPattern.test(currentUrl)) {
        continue;
      }
    }

    try {
      const anchor = target.closest(compiled.entry.selector);
      if (anchor instanceof HTMLElement) {
        currentAnchor = anchor;
        showTooltip({
          anchor,
          title: getLocalizedValue(compiled.entry.title),
          text: getLocalizedValue(compiled.entry.description),
        });
        return;
      }
    } catch {
      // Ignore invalid selectors
      continue;
    }
  }
}

function handleMouseOut(e: MouseEvent) {
  if (!currentAnchor) return;

  // If the element we left is the current anchor or inside it
  if (currentAnchor.contains(e.target as Node)) {
    const related = e.relatedTarget as Node;
    // If we moved to something outside the anchor
    if (!related || !currentAnchor.contains(related)) {
      hideTooltip();
      currentAnchor = null;
    }
  }
}

export function setHoverEntries(entries: HoverEntry[]): void {
  compiledEntries = entries.map((entry) => {
    let urlPattern: RegExp | undefined;
    if (entry.urlPattern) {
      try {
        urlPattern = new RegExp(entry.urlPattern);
      } catch (error) {
        console.warn(
          '[gittohabu] urlPattern definition is invalid:',
          entry.urlPattern,
          error,
        );
      }
    }
    return { entry, urlPattern };
  });
}

export function setHoverEnabled(enabled: boolean): void {
  if (isEnabled === enabled) return;
  isEnabled = enabled;
  if (enabled) {
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
  } else {
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
    hideTooltip();
    currentAnchor = null;
  }
}
