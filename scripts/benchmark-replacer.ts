class NodeFilter {
  static FILTER_ACCEPT = 1;
  static FILTER_REJECT = 2;
  static SHOW_TEXT = 4;
}

class Node {
  parentElement: Element | null = null;
}

class Element extends Node {
  constructor(public tagName: string, public isContentEditable: boolean = false) {
    super();
  }
}

class Text extends Node {
  constructor(public textContent: string) {
    super();
  }
}

// Old implementation
function acceptNodeOld(node: Node) {
  const parent = node.parentElement;
  if (!parent) return NodeFilter.FILTER_REJECT;
  const tagName = parent.tagName;
  if (
    tagName === 'SCRIPT' || tagName === 'script' ||
    tagName === 'STYLE' || tagName === 'style' ||
    tagName === 'TEXTAREA' || tagName === 'textarea' ||
    tagName === 'INPUT' || tagName === 'input' ||
    parent.isContentEditable
  ) {
    return NodeFilter.FILTER_REJECT;
  }
  return NodeFilter.FILTER_ACCEPT;
}

// New implementation 1: Set lookup
const IGNORED_TAGS_SET = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT']);
function acceptNodeNewSet(node: Node) {
  const parent = node.parentElement;
  if (!parent) return NodeFilter.FILTER_REJECT;
  if (
    IGNORED_TAGS_SET.has(parent.tagName) ||
    parent.isContentEditable
  ) {
    return NodeFilter.FILTER_REJECT;
  }
  return NodeFilter.FILTER_ACCEPT;
}

// New implementation 2: Only uppercase check
function acceptNodeNewUpper(node: Node) {
  const parent = node.parentElement;
  if (!parent) return NodeFilter.FILTER_REJECT;
  const tagName = parent.tagName;
  if (
    tagName === 'SCRIPT' ||
    tagName === 'STYLE' ||
    tagName === 'TEXTAREA' ||
    tagName === 'INPUT' ||
    parent.isContentEditable
  ) {
    return NodeFilter.FILTER_REJECT;
  }
  return NodeFilter.FILTER_ACCEPT;
}

const ITERATIONS = 10_000_000;

// Nodes setup
const nodes: Node[] = [
  // 1. Tag name uppercase
  Object.assign(new Text('test'), { parentElement: new Element('DIV') }),
  Object.assign(new Text('test'), { parentElement: new Element('SCRIPT') }),
  Object.assign(new Text('test'), { parentElement: new Element('SPAN') }),
  Object.assign(new Text('test'), { parentElement: new Element('INPUT') }),
  Object.assign(new Text('test'), { parentElement: new Element('A') }),
];

console.log("Benchmarking tagName checks...");

const startOld = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  acceptNodeOld(nodes[i % nodes.length]);
}
const endOld = performance.now();
console.log(`Old implementation: ${(endOld - startOld).toFixed(2)} ms`);

const startSet = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  acceptNodeNewSet(nodes[i % nodes.length]);
}
const endSet = performance.now();
console.log(`Set lookup: ${(endSet - startSet).toFixed(2)} ms`);

const startUpper = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  acceptNodeNewUpper(nodes[i % nodes.length]);
}
const endUpper = performance.now();
console.log(`Uppercase only: ${(endUpper - startUpper).toFixed(2)} ms`);
