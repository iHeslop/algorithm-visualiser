import { createContext, useEffect, useState } from "react";
import { bfs, dfs, dij } from "../services/traversalFunctions";

type TraversalFunction = (
  data: TreeNode | number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => Promise<number | null>;

interface Items {
  [key: string]: TraversalFunction;
}

type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

type ContextType = {
  randomizeNumbers: () => void;
  target: number;
  numbers: number[];
  styles: string[];
  updateNumbers: (numbers: number[]) => void;
  items: Items;
  updateSearchFunction: (data: string) => void;
  searchNumbers: () => void;
};

const initialContextValue: ContextType = {
  randomizeNumbers: () => {},
  target: 0,
  numbers: [],
  styles: [],
  updateNumbers: () => {},
  items: {},
  updateSearchFunction: () => {},
  searchNumbers: () => {},
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

const TraversalContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchFunction, setSearchFunction] = useState<TraversalFunction>(
    () => bfs
  );

  const [numbers, setNumbers] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [styles, setStyles] = useState<string[]>(Array(20).fill(""));

  const updateSearchFunction = (data: string) => {
    setSearchFunction(() => items[data]);
  };

  const searchNumbers = async () => {
    await searchFunction([...numbers], target, setNumbers, updateStyles);
  };

  const updateNumbers = (numbers: number[]) => {
    setNumbers(numbers);
  };

  const updateStyles = (
    index1: number | null,
    index2: number | null,
    action: string
  ) => {
    const newStyles = Array(20).fill("");
    if (target !== null) {
      const targetIndex = numbers.indexOf(target);
      newStyles[targetIndex] = "square_target";
    }
    if (action === "current" && index1 != null) {
      newStyles[index1] = "square_current";
      if (index2 != null) {
        newStyles[index2] = "square_current";
      }
    } else if (action === "complete") {
      for (let i = 0; i < newStyles.length; i++) {
        newStyles[i] = "square_complete";
      }
    }
    setStyles(newStyles);
  };

  const randomizeNumbers = () => {
    const newStyles = Array(20).fill("");
    const nums: number[] = [];
    while (nums.length < 20) {
      const newNumber = Math.floor(Math.random() * 100);
      if (!nums.includes(newNumber) && newNumber > 3) {
        nums.push(newNumber);
      }
    }
    setStyles(newStyles);
    updateNumbers(nums);
    const randomTarget = nums[Math.floor(Math.random() * nums.length)];
    setTarget(randomTarget);
    const targetIndex = nums.indexOf(randomTarget);
    newStyles[targetIndex] = "square_target";
    setStyles(newStyles);
  };

  useEffect(() => {
    randomizeNumbers();
  }, [searchFunction]);

  const providedValues = {
    numbers,
    target,
    styles,
    updateNumbers,
    randomizeNumbers,
    items,
    updateSearchFunction,
    searchNumbers,
  };
  return (
    <TraversalContext.Provider value={providedValues}>
      {children}
    </TraversalContext.Provider>
  );
};

export default TraversalContextProvider;
