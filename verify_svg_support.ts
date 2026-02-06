import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><button class="btn-primary"><svg><path /></svg></button>');
global.document = dom.window.document;
global.Element = dom.window.Element;
global.HTMLElement = dom.window.HTMLElement;
global.SVGElement = dom.window.SVGElement;
global.Node = dom.window.Node;

const target = document.querySelector('svg');
console.log('Target is SVGElement:', target instanceof SVGElement);
console.log('Target is Element:', target instanceof Element);
console.log('Target is HTMLElement:', target instanceof HTMLElement);

if (!(target instanceof Element)) {
  console.log('Check failed: SVG is not considered an Element');
} else {
  console.log('Check passed: SVG is considered an Element');
}
