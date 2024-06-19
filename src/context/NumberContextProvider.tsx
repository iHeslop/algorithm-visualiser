import { createContext, useEffect, useState } from "react";
import {
  selectionSort,
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
} from "../services/sortFunctions";

type SortingFunction = (data: number[]) => number[];

interface Items {
  [key: string]: SortingFunction;
}

const items: Items = {
  "SELECTION SORT": selectionSort,
  "BUBBLE SORT": bubbleSort,
  "INSERTION SORT": insertionSort,
  "QUICK SORT": quickSort,
  "MERGE SORT": mergeSort,
};

type ContextType = {
  randomizeNumbers: () => void;
  numbers: number[];
  updateNumbers: (numbers: number[]) => void;
  items: Items;
  updateSortFunction: (data: string) => void;
  sortNumbers: () => void;
};

const initialContextValue: ContextType = {
  randomizeNumbers: () => {},
  numbers: [],
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

  // Sorting Functions
  const updateSortFunction = (data: string) => {
    setSortFunction(() => items[data]);
  };

  const sortNumbers = () => {
    const sortedNumbers = sortFunction([...numbers]);
    setNumbers(sortedNumbers);
  };

  // Initial Numbers Control
  const updateNumbers = (numbers: number[]) => {
    setNumbers(numbers);
  };

  const randomizeNumbers = () => {
    const nums: number[] = [];
    while (nums.length < 20) {
      const newNumber = Math.floor(Math.random() * 100);
      if (!nums.includes(newNumber) && newNumber > 3) {
        nums.push(newNumber);
      }
    }
    updateNumbers(nums);
  };

  useEffect(() => {
    randomizeNumbers();
  }, []);

  const providedValues = {
    numbers,
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
