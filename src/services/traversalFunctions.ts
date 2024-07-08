type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

// Breadth-First-Search
export const bfs = async (
  root: TreeNode | null,
  target: number,
  setCurrentNode: (value: number) => void,
  setCompletedTree: (value: boolean) => void
) => {
  if (!root) return null;
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    const { value, left, right } = currentNode;

    setCurrentNode(value);
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (value === target) {
      setCompletedTree(true);
      return value;
    }
    if (left) queue.push(left);
    if (right) queue.push(right);
  }
  setCompletedTree(true);
  return null;
};

// Depth-First-Search
export const dfs = async (
  root: TreeNode | null,
  target: number,
  setCurrentNode: (value: number) => void,
  setCompletedTree: (value: boolean) => void
) => {
  const stack: TreeNode[] = [];
  const visited: Set<TreeNode> = new Set();

  if (!root) return null;

  stack.push(root);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    if (visited.has(currentNode)) continue;

    visited.add(currentNode);
    setCurrentNode(currentNode.value);
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (currentNode.value === target) {
      setCompletedTree(true);
      return currentNode.value;
    }
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }
  setCompletedTree(true);
  return null;
};

// Dijkstra's Algorithm
export const dij = async (
  root: TreeNode | null,
  target: number,
  setCurrentNode: (value: number) => void,
  setCompletedTree: (value: boolean) => void
) => {
  if (!root) return null;

  const priorityQueue: { node: TreeNode; cost: number }[] = [];
  const costs = new Map<TreeNode, number>();
  const parents = new Map<TreeNode, TreeNode | null>();

  costs.set(root, 0);
  priorityQueue.push({ node: root, cost: 0 });

  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a.cost - b.cost);
    const { node, cost } = priorityQueue.shift()!;
    setCurrentNode(node.value);
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (node.value === target) {
      setCompletedTree(true);
      return node.value;
    }

    if (node.left) {
      const newCost = cost + node.left.value;
      if (!costs.has(node.left) || newCost < costs.get(node.left)!) {
        costs.set(node.left, newCost);
        parents.set(node.left, node);
        priorityQueue.push({ node: node.left, cost: newCost });
      }
    }

    if (node.right) {
      const newCost = cost + node.right.value;
      if (!costs.has(node.right) || newCost < costs.get(node.right)!) {
        costs.set(node.right, newCost);
        parents.set(node.right, node);
        priorityQueue.push({ node: node.right, cost: newCost });
      }
    }
  }

  setCompletedTree(true);
  return null;
};
