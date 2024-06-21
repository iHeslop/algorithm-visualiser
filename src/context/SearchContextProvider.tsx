import { createContext, useEffect, useState } from "react";
import {
  linearSearch,
  binarySearch,
  fibonacciSearch,
  ternarySearch,
} from "../services/searchFunctions";

type SearchFunction = (
  data: number[],
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => Promise<number[]>;

interface Items {
  [key: string]: SearchFunction;
}

type ContextType = {
  randomizeNumbers: () => void;
  numbers: number[];
  styles: string[];
  updateNumbers: (numbers: number[]) => void;
  items: Items;
  updateSearchFunction: (data: string) => void;
  searchNumbers: () => void;
};

const initialContextValue: ContextType = {
  randomizeNumbers: () => {},
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
};

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchFunction, setSearchFunction] = useState<SearchFunction>(
    () => linearSearch
  );

  const [numbers, setNumbers] = useState<number[]>([]);
  const [styles, setStyles] = useState<string[]>(Array(20).fill(""));

  const updateSearchFunction = (data: string) => {
    setSearchFunction(() => items[data]);
  };

  const searchNumbers = async () => {
    await searchFunction([...numbers], setNumbers, updateStyles);
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
  }, []);

  const providedValues = {
    numbers,
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
