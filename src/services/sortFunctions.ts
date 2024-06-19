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
  return data;
};

export const bubbleSort = (data: number[]): number[] => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
};

export const insertionSort = (data: number[]): number[] => {
  for (let i = 0; i < data.length; i++) {
    let j = i;
    while (j > 0 && data[j] < data[j - 1]) {
      let temp = data[j];
      data[j] = data[j - 1];
      data[j - 1] = temp;
      j -= 1;
    }
  }
  return data;
};

export const quickSort = (data: number[]): number[] => {
  console.log("Quick Sort");
  return [];
};

export const mergeSort = (data: number[]): number[] => {
  console.log("Merge Sort");
  return [];
};

export const heapSort = (data: number[]): number[] => {
  console.log("Heap Sort");
  return [];
};
