import { replaceTextNode, setReplaceEntries, setLanguage, setEnabled } from '../src/content/replacer';

// Mock Browser Environment
class MockText {
    public textContent: string | null;
    constructor(text: string) {
        this.textContent = text;
    }
}
globalThis.Text = MockText as any;
globalThis.window = {
    location: {
        href: 'https://github.com/user/repo'
    }
} as any;
globalThis.WeakRef = class WeakRef<T extends object> {
    private target: T;
    constructor(target: T) {
        this.target = target;
    }
    deref(): T | undefined {
        return this.target;
    }
} as any;
globalThis.WeakMap = class WeakMap<K extends object, V> {
    private map = new Map<K, V>();
    set(key: K, value: V) {
        this.map.set(key, value);
        return this;
    }
    get(key: K) {
        return this.map.get(key);
    }
    has(key: K) {
        return this.map.has(key);
    }
} as any;

// Setup Replacements
const entries: any[] = [
    {
        type: 'replace',
        id: '1',
        from: 'Pull request',
        to: { ja: 'プルリクエスト' },
        caseSensitive: false
    },
    {
        type: 'replace',
        id: '2',
        from: 'Issues',
        to: { ja: 'イシュー' },
        caseSensitive: false
    },
    {
        type: 'replace',
        id: '3',
        from: 'Marketplace',
        to: { ja: 'マーケットプレイス' },
        caseSensitive: false
    },
    {
        type: 'replace',
        id: '4',
        from: 'Explore',
        to: { ja: '探索' },
        caseSensitive: false
    }
];

setReplaceEntries(entries);
setLanguage('ja');
setEnabled(true);

// Generate Data
const NODE_COUNT = 100000;
const MATCH_RATE = 0.1; // 10% match
const nodes: MockText[] = [];
const terms = ['Pull request', 'Issues', 'Marketplace', 'Explore'];

console.log('Generating nodes...');
for (let i = 0; i < NODE_COUNT; i++) {
    let text = '';
    if (Math.random() < MATCH_RATE) {
        // Create a matching string
        text = `Check out this ${terms[Math.floor(Math.random() * terms.length)]} today.`;
    } else {
        // Create a non-matching string
        text = `This is just some random text entry number ${i} that should not match anything.`;
    }
    nodes.push(new MockText(text));
}

console.log(`Benchmarking with ${NODE_COUNT} nodes (${MATCH_RATE * 100}% match rate)...`);

// Run Benchmark
const start = performance.now();

for (const node of nodes) {
    replaceTextNode(node as unknown as Text);
}

const end = performance.now();
const duration = end - start;

console.log(`Total time: ${duration.toFixed(2)}ms`);
console.log(`Average time per node: ${(duration / NODE_COUNT).toFixed(4)}ms`);

// Verify replacements occurred (sanity check)
const replacedCount = nodes.filter(n =>
    n.textContent?.includes('プルリクエスト') ||
    n.textContent?.includes('イシュー') ||
    n.textContent?.includes('マーケットプレイス') ||
    n.textContent?.includes('探索')
).length;

console.log(`Matched count: ${replacedCount} (Expected approx ${Math.floor(NODE_COUNT * MATCH_RATE)})`);
