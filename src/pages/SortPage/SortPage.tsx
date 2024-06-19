import { useContext, useEffect, useState } from "react";
import SubMenu from "../../components/SubMenu/SubMenu";
import {
  selectionSort,
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
  heapSort,
} from "../../services/sortFunctions";
import { NumberContext } from "../../context/NumberContextProvider";

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
  "HEAP SORT": heapSort,
};

const SortPage = () => {
  const { numbers, updateNumbers } = useContext(NumberContext);
  const [sortFunction, setSortFunction] = useState<SortingFunction>(
    () => selectionSort
  );
  const updateSortFunction = (data: string) => {
    setSortFunction(items[data]);
  };

  useEffect(() => {
    const updatedNumbers: number[] = sortFunction(numbers);
    updateNumbers(updatedNumbers);
  }, []);

  return (
    <>
      <SubMenu items={Object.keys(items)} updateFunction={updateSortFunction} />
      <h1>This is the Sorting Page</h1>
    </>
  );
};

export default SortPage;
