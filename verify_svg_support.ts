import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><button class="btn-primary"><svg><path /></svg></button>');
global.document = dom.window.document;
global.Element = dom.window.Element;
global.HTMLElement = dom.window.HTMLElement;
global.SVGElement = dom.window.SVGElement;
global.Node = dom.window.Node;

const target = document.querySelector('svg');

if (!target) {
  console.error('SVG element not found in DOM');
  process.exit(1);
}

console.log('Target is SVGElement:', target instanceof SVGElement);
console.log('Target is Element:', target instanceof Element);
console.log('Target is HTMLElement:', target instanceof HTMLElement);

if (!(target instanceof Element)) {
  console.error('Check failed: SVG is not considered an Element');
  process.exit(1);
} else {
  console.log('Check passed: SVG is considered an Element');
}
