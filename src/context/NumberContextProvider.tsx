import { createContext, useEffect, useState } from "react";

type ContextType = {
  numbers: number[];
  updateNumbers: (numbers: number[]) => void;
};

const initialContextValue: ContextType = {
  numbers: [],
  updateNumbers: () => {},
};

export const NumberContext = createContext<ContextType>(initialContextValue);

type NumberContextProviderProps = {
  children: React.ReactNode;
};

const NumberContextProvider = ({ children }: NumberContextProviderProps) => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const updateNumbers = (numbers: number[]) => {
    setNumbers(numbers);
  };
  const providedValues = {
    numbers,
    updateNumbers,
  };

  useEffect(() => {
    const nums: number[] = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100)
    );
    updateNumbers(nums);
  }, []);

  return (
    <NumberContext.Provider value={providedValues}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberContextProvider;
