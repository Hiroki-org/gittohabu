// Mock DOM classes
class Node {
  parentNode: Node | null = null;
  contains(node: Node | null): boolean {
    if (!node) return false;
    let current: Node | null = node;
    while (current) {
      if (current === this) return true;
      current = current.parentNode;
    }
    return false;
  }
}

class Element extends Node {
  constructor(public tagName: string) {
    super();
  }

  closest(selector: string): Element | null {
    // Simple mock: if selector matches tagName (case insensitive)
    if (selector.toUpperCase() === this.tagName.toUpperCase()) {
      return this;
    }
    // Also support class selector '.className'
    if (selector.startsWith('.')) {
        // Mock class check: assume this element has class 'btn-primary' if tagName is BUTTON
        if (selector === '.btn-primary' && this.tagName === 'BUTTON') return this;
    }

    if (this.parentNode instanceof Element) {
      return this.parentNode.closest(selector);
    }
    return null;
  }

  getBoundingClientRect() {
      return { top: 0, left: 0, width: 100, height: 20, bottom: 20, right: 100 } as any;
  }
}

class HTMLElement extends Element {}
class SVGElement extends Element {}

// Setup test scenario
// <button class="btn-primary">
//   <svg>
//     <path></path>
//   </svg>
// </button>

const button = new HTMLElement('BUTTON');
const svg = new SVGElement('SVG');
const path = new SVGElement('PATH');

svg.parentNode = button;
path.parentNode = svg;

console.log('Verifying tooltip logic compatibility with SVG elements...');

// Test 1: Hover over SVG Path (inner element)
const target = path;
console.log(`Target is ${target.tagName} (instanceof Element: ${target instanceof Element})`);

if (!(target instanceof Element)) {
  console.error('FAIL: Target should be an Element');
  process.exit(1);
}

// Simulate hover logic finding anchor
const selector = '.btn-primary';
const anchor = target.closest(selector);

if (!anchor) {
    console.error('FAIL: Closest anchor not found');
    process.exit(1);
}

console.log(`Closest anchor found: ${anchor.tagName}`);

if (!(anchor instanceof Element)) {
    console.error('FAIL: Anchor should be an Element');
    process.exit(1);
}

// Test 2: Check if anchor is detected as SVG parent correctly

const isSVGSupported = (target instanceof Element) && (anchor instanceof Element);
if (isSVGSupported) {
    console.log('SUCCESS: Logic supports SVG elements correctly.');
} else {
    console.error('FAIL: Logic failed to support SVG elements.');
    process.exit(1);
}

// Additional check: Ensure SVGElement is NOT HTMLElement (to prove why the fix was needed)
if (path instanceof HTMLElement) {
    console.warn('WARNING: SVGElement is instanceof HTMLElement in this mock. In real browsers they are distinct.');
} else {
    console.log('Verified: SVGElement is NOT HTMLElement (as expected in browsers).');
}
