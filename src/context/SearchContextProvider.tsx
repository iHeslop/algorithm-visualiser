import { createContext, useEffect, useState } from "react";
import {
  linearSearch,
  binarySearch,
  fibonacciSearch,
  ternarySearch,
  interpolationSearch,
} from "../services/searchFunctions";

type SearchFunction = (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => Promise<number | null>;

interface Items {
  [key: string]: SearchFunction;
}

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

export const SearchContext = createContext<ContextType>(initialContextValue);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

const items: Items = {
  "LINEAR SEARCH": linearSearch,
  "BINARY SEARCH": binarySearch,
  "FIBONACCI SEARCH": fibonacciSearch,
  "TERNARY SEARCH": ternarySearch,
  "INTERPOLATION SEARCH": interpolationSearch,
};

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchFunction, setSearchFunction] = useState<SearchFunction>(
    () => linearSearch
  );

  const [numbers, setNumbers] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [styles, setStyles] = useState<string[]>(Array(20).fill(""));
  const [isActive, setIsActive] = useState<boolean>(false);

  const updateSearchFunction = (data: string) => {
    setSearchFunction(() => items[data]);
  };

  const searchNumbers = async () => {
    if (!isActive) {
      setIsActive(true);
      await searchFunction([...numbers], target, setNumbers, updateStyles);
      setIsActive(false);
    }
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
    if (searchFunction !== linearSearch) {
      nums.sort((a, b) => a - b);
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
    <SearchContext.Provider value={providedValues}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
