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
  return target;
};

// Dijkstra's Algorithm
export const dij = async (
  root: TreeNode | null,
  target: number,
  setCurrentNode: (value: number) => void,
  setCompletedTree: (value: boolean) => void
) => {
  return target;
};
