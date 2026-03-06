import { replaceTextNode, setEnabled, setLanguage, setReplaceEntries, restoreAll } from '../src/content/replacer';

// Mock Text node
class MockText {
  textContent: string | null;
  constructor(textContent: string) {
    this.textContent = textContent;
  }
}

// Global mocks
global.Text = MockText as any;
global.window = { location: { href: 'https://github.com' } } as any;

setEnabled(true);
setLanguage('ja');
setReplaceEntries([
  { from: 'Repository', to: { ja: 'リポジトリ' }, caseSensitive: true },
]);

const numNodes = 20000;
const nodes = Array.from({ length: numNodes }, (_, i) => new MockText(`Repository ${i}`));

console.log("Measuring time to process", numNodes, "unique nodes...");
const start = performance.now();
for (const node of nodes) {
  replaceTextNode(node as unknown as Text);
}
const end = performance.now();
console.log(`Time taken: ${(end - start).toFixed(2)}ms`);
