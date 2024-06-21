type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

// Breadth-First-Search
export const bfs = async (
  data: TreeNode | number[],
  target: number,
  setTree: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  return target;
};

// Depth-First-Search
export const dfs = async (
  data: TreeNode | number[],
  target: number,
  setTree: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  return target;
};

// Dijkstra's Algorithm
export const dij = async (
  data: TreeNode | number[],
  target: number,
  setTree: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  return target;
};
