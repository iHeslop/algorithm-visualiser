export const selectionSort = (data: number[]): number[] => {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    let temp = data[i];
    data[i] = data[minIndex];
    data[minIndex] = temp;
  }
  console.log(data);
  return data;
};

export const bubbleSort = (): number[] => {
  console.log("Bubble Sort");
  return [];
};

export const insertionSort = (): number[] => {
  console.log("Insertion Sort");
  return [];
};

export const quickSort = (): number[] => {
  console.log("Quick Sort");
  return [];
};

export const mergeSort = (): number[] => {
  console.log("Merge Sort");
  return [];
};

export const heapSort = (): number[] => {
  console.log("Heap Sort");
  return [];
};
