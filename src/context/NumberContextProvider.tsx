import { createContext, useEffect, useState } from "react";
import {
  selectionSort,
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
} from "../services/sortFunctions";

type SortingFunction = (
  data: number[],
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void,
  low?: number,
  high?: number
) => Promise<number[]>;

interface Items {
  [key: string]: SortingFunction;
}

const quickSortWrapper: SortingFunction = async (
  data,
  updateNumbers,
  updateStyles
) => {
  return quickSort(data, 0, data.length - 1, updateNumbers, updateStyles);
};

const mergeSortWrapper: SortingFunction = async (
  data,
  updateNumbers,
  updateStyles
) => {
  return mergeSort(data, 0, data.length - 1, updateNumbers, updateStyles);
};

const items: Items = {
  "SELECTION SORT": selectionSort,
  "BUBBLE SORT": bubbleSort,
  "INSERTION SORT": insertionSort,
  "QUICK SORT": quickSortWrapper,
  "MERGE SORT": mergeSortWrapper,
};

type ContextType = {
  randomizeNumbers: () => void;
  numbers: number[];
  styles: string[];
  updateNumbers: (numbers: number[]) => void;
  items: Items;
  updateSortFunction: (data: string) => void;
  sortNumbers: () => void;
};

const initialContextValue: ContextType = {
  randomizeNumbers: () => {},
  numbers: [],
  styles: [],
  updateNumbers: () => {},
  items: {},
  updateSortFunction: () => {},
  sortNumbers: () => {},
};

export const NumberContext = createContext<ContextType>(initialContextValue);

type NumberContextProviderProps = {
  children: React.ReactNode;
};

const NumberContextProvider = ({ children }: NumberContextProviderProps) => {
  const [sortFunction, setSortFunction] = useState<SortingFunction>(
    () => selectionSort
  );
  const [numbers, setNumbers] = useState<number[]>([]);
  const [styles, setStyles] = useState<string[]>(Array(20).fill(""));

  const updateSortFunction = (data: string) => {
    setSortFunction(() => items[data]);
  };

  const sortNumbers = async () => {
    await sortFunction([...numbers], setNumbers, updateStyles);
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
    if (action === "swap" && index1 !== null && index2 !== null) {
      newStyles[index1] = "bar_swap";
      newStyles[index2] = "bar_swap";
    } else if (action === "sorted" && index1 !== null && index2 !== null) {
      newStyles[index1] = "bar_sorted";
      newStyles[index2] = "bar_sorted";
    } else if (action === "complete") {
      for (let i = 0; i < newStyles.length; i++) {
        newStyles[i] = "bar_sorted";
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
  };

  useEffect(() => {
    randomizeNumbers();
  }, [sortFunction]);

  const providedValues = {
    numbers,
    styles,
    updateNumbers,
    randomizeNumbers,
    items,
    updateSortFunction,
    sortNumbers,
  };

  return (
    <NumberContext.Provider value={providedValues}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberContextProvider;
