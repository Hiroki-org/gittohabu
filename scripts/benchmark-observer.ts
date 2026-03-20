class MockNode {
  parentNode: MockNode | null = null;
  isConnected = true;
  nodeType = 1; // ELEMENT_NODE
}

const numNodes = 10000;
const currentPending = new Set<MockNode>();
const nodes: MockNode[] = [];

for (let i = 0; i < numNodes; i++) {
  const node = new MockNode();
  if (i > 0) {
    node.parentNode = nodes[Math.floor(Math.random() * i)];
  }
  nodes.push(node);
  currentPending.add(node);
}

const currentPendingArray = Array.from(currentPending);

function runBaseline() {
  const ancestorCache = new Map<MockNode, boolean>();

  function hasPendingAncestor(node: MockNode | null): boolean {
    if (!node) return false;
    if (ancestorCache.has(node)) return ancestorCache.get(node)!;

    let result = false;
    if (currentPending.has(node)) {
      result = true;
    } else {
      result = hasPendingAncestor(node.parentNode);
    }

    ancestorCache.set(node, result);
    return result;
  }

  const nodesArr = Array.from(currentPending);
  const filteredNodes = nodesArr.filter((node) => {
    if (!node.isConnected) return false;
    return !hasPendingAncestor(node.parentNode);
  });

  let count = 0;
  for (const node of filteredNodes) {
    if (!node.isConnected) continue;
    count++;
  }
  return count;
}

function runOptimized() {
  const ancestorCache = new Map<MockNode, boolean>();

  function hasPendingAncestor(node: MockNode | null): boolean {
    if (!node) return false;
    if (ancestorCache.has(node)) return ancestorCache.get(node)!;

    let result = false;
    if (currentPending.has(node)) {
      result = true;
    } else {
      result = hasPendingAncestor(node.parentNode);
    }

    ancestorCache.set(node, result);
    return result;
  }

  let count = 0;
  for (const node of currentPending) {
    if (!node.isConnected) continue;
    if (hasPendingAncestor(node.parentNode)) continue;
    count++;
  }
  return count;
}

// Warm up
for (let i = 0; i < 100; i++) {
  runBaseline();
  runOptimized();
}

const baselineStart = performance.now();
for (let i = 0; i < 100; i++) runBaseline();
const baselineEnd = performance.now();

const optimizedStart = performance.now();
for (let i = 0; i < 100; i++) runOptimized();
const optimizedEnd = performance.now();

console.log(`Baseline: ${baselineEnd - baselineStart}ms`);
console.log(`Optimized: ${optimizedEnd - optimizedStart}ms`);
