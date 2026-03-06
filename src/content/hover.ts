import { showTooltip, hideTooltip } from './tooltip';
import type { HoverEntry } from '../dictionary/schema';

type CompiledHoverEntry = {
  entry: HoverEntry;
  urlPattern?: RegExp;
};

let compiledEntries: CompiledHoverEntry[] = [];
// Cache for optimization
let activeEntries: CompiledHoverEntry[] = [];
let activeCombinedSelector: string = '';
let lastUrl: string = '';

let isEnabled = false;
let currentLang = 'ja';
let currentAnchor: Element | null = null;

export function setLanguage(lang: string): void {
  currentLang = lang;
}

function getLocalizedValue(text: { [key: string]: string }): string {
  if (text[currentLang]) return text[currentLang];
  if (text['en']) return text['en'];
  for (const key in text) {
    if (text[key]) return text[key];
  }
  return '';
}

function isValidSelector(selector: string): boolean {
  try {
    document.createDocumentFragment().querySelector(selector);
    return true;
  } catch {
    return false;
  }
}

function updateActiveEntries() {
  const currentUrl = window.location.href;
  if (currentUrl === lastUrl) return;

  activeEntries = compiledEntries.filter((compiled) => {
    if (compiled.urlPattern) {
      return compiled.urlPattern.test(currentUrl);
    }
    return true;
  });

  activeCombinedSelector = activeEntries
    .map((c) => c.entry.selector)
    .join(',');

  lastUrl = currentUrl;
}

function handleMouseOver(e: MouseEvent) {
  if (!isEnabled) return;
  if (!(e.ctrlKey || e.metaKey)) return;

  const target = e.target;
  if (!(target instanceof Element)) return;

  // Optimization: if we are already in currentAnchor, do nothing
  if (currentAnchor && currentAnchor.contains(target)) {
    return;
  }

  updateActiveEntries();

  if (!activeCombinedSelector) return;

  const match = target.closest(activeCombinedSelector);
  if (!match || !(match instanceof Element)) return;

  for (const compiled of activeEntries) {
    if (match.matches(compiled.entry.selector)) {
      currentAnchor = match;
      showTooltip({
        anchor: match,
        title: getLocalizedValue(compiled.entry.title),
        text: getLocalizedValue(compiled.entry.description),
      });
      return;
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
  compiledEntries = entries
    .filter((entry) => {
      if (!isValidSelector(entry.selector)) {
        console.warn('[gittohabu] Invalid selector:', entry.selector);
        return false;
      }
      return true;
    })
    .map((entry) => {
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

  // Reset cache
  lastUrl = '';
  activeCombinedSelector = '';
  activeEntries = [];
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
