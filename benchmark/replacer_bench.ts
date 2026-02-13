import { Bench } from 'tinybench';

// Mock window.location
const mockWindow = {
  location: {
    _href: "https://github.com/some/repo/pulls",
    get href() {
      return this._href;
    }
  }
};

type CompiledReplaceEntry = {
  urlPattern?: RegExp;
};

class ReplacementCache {
  private activeEntries: CompiledReplaceEntry[] = [];
  private cachedUrl: string | null = null;

  invalidate(): void {
    this.cachedUrl = null;
    this.activeEntries = [];
  }

  // Current implementation: always accesses window.location.href
  get(allEntries: CompiledReplaceEntry[]): CompiledReplaceEntry[] {
    const currentUrl = mockWindow.location.href;
    if (this.cachedUrl === currentUrl) {
      return this.activeEntries;
    }

    this.activeEntries = allEntries.filter(
      (c) => !c.urlPattern || c.urlPattern.test(currentUrl),
    );
    this.cachedUrl = currentUrl;
    return this.activeEntries;
  }

  // Optimized implementation: accepts optional currentUrl
  getOptimized(allEntries: CompiledReplaceEntry[], currentUrl?: string): CompiledReplaceEntry[] {
    const url = currentUrl ?? mockWindow.location.href;
    if (this.cachedUrl === url) {
      return this.activeEntries;
    }

    this.activeEntries = allEntries.filter(
      (c) => !c.urlPattern || c.urlPattern.test(url),
    );
    this.cachedUrl = url;
    return this.activeEntries;
  }
}

const cache = new ReplacementCache();
const allEntries: CompiledReplaceEntry[] = [
  { urlPattern: /github\.com/ },
  { urlPattern: /other\.com/ },
];

const bench = new Bench({ time: 1000 });

// Simulate scenario where get is called repeatedly (e.g. for many text nodes)
const url = mockWindow.location.href;

bench
  .add('Original (accesses window.location every time)', () => {
    cache.get(allEntries);
  })
  .add('Optimized (passes URL)', () => {
    cache.getOptimized(allEntries, url);
  });

async function run() {
  await bench.run();
  console.table(bench.table());
}

run();
