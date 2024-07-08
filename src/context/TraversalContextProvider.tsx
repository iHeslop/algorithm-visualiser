import { createContext, useEffect, useState } from "react";
import { bfs, dfs, dij } from "../services/traversalFunctions";

export type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

type TraversalFunction = (
  root: TreeNode | null,
  target: number,
  setCurrentNode: (value: number) => void,
  setCompletedTree: (value: boolean) => void
) => Promise<number | null>;

interface Items {
  [key: string]: TraversalFunction;
}

type ContextType = {
  randomizeTree: () => void;
  target: number;
  tree: TreeNode | null;
  items: Items;
  updateSearchFunction: (data: string) => void;
  searchTree: () => void;
  completed: boolean;
  current: number;
};

const initialContextValue: ContextType = {
  randomizeTree: () => {},
  target: 0,
  tree: null,
  items: {},
  updateSearchFunction: () => {},
  searchTree: () => {},
  completed: false,
  current: 0,
};

export const TraversalContext = createContext<ContextType>(initialContextValue);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

const items: Items = {
  "BREADTH FIRST SEARCH": bfs,
  "DEPTH FIRST SEARCH": dfs,
  "DIJKSTRA'S ALGORITHM": dij,
};

const generateRandomTree = (
  depth = 4,
  usedValues: number[] = []
): TreeNode | null => {
  if (depth === 0) return null;

  let value = Math.floor(Math.random() * 99) + 1;
  while (usedValues.includes(value)) {
    value = Math.floor(Math.random() * 99) + 1;
  }
  usedValues.push(value);

  const node: TreeNode = {
    value,
    left: generateRandomTree(depth - 1, usedValues),
    right: generateRandomTree(depth - 1, usedValues),
  };

  return node;
};

const TraversalContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchFunction, setSearchFunction] = useState<TraversalFunction>(
    () => bfs
  );
  const [tree, setTree] = useState<TreeNode | null>(generateRandomTree());
  const [target, setTarget] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  const setCompletedTree = (value: boolean) => {
    setCompleted(value);
  };

  const setCurrentNode = (value: number) => {
    setCurrent(value);
  };

  const updateSearchFunction = (data: string) => {
    setSearchFunction(() => items[data]);
  };

  const searchTree = async () => {
    await searchFunction(tree, target, setCurrentNode, setCompletedTree);
  };

  const randomizeTree = () => {
    setCompletedTree(false);
    setCurrentNode(0);
    const values: number[] = [];
    const newTree = generateRandomTree(4, values);
    setTree(newTree);
    if (newTree != null) {
      const randomTarget = values[Math.floor(Math.random() * values.length)];
      setTarget(randomTarget);
    }
  };

  useEffect(() => {
    randomizeTree();
  }, [searchFunction]);

  const providedValues = {
    tree,
    target,
    randomizeTree,
    items,
    updateSearchFunction,
    searchTree,
    setCompletedTree,
    completed,
    current,
  };
  return (
    <TraversalContext.Provider value={providedValues}>
      {children}
    </TraversalContext.Provider>
  );
};

export default TraversalContextProvider;
