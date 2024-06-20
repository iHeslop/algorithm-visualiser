export const selectionSort = async (
  data: number[],
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [data[i], data[minIndex]] = [data[minIndex], data[i]];
      updateNumbers([...data]);
      updateStyles(i, minIndex, "swap");
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateStyles(i, minIndex, "sorted");
    }
  }
  updateStyles(null, null, "complete");
  return data;
};

export const bubbleSort = async (
  data: number[],
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
        updateNumbers([...data]);
        updateStyles(j, j + 1, "swap");
        await new Promise((resolve) => setTimeout(resolve, 500));
        updateStyles(j, j + 1, "sorted");
      }
    }
  }
  updateStyles(null, null, "complete");
  return data;
};

export const insertionSort = async (
  data: number[],
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  for (let i = 0; i < data.length; i++) {
    let j = i;
    while (j > 0 && data[j] < data[j - 1]) {
      [data[j], data[j - 1]] = [data[j - 1], data[j]];
      updateNumbers([...data]);
      updateStyles(j, j - 1, "swap");
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateStyles(j, j - 1, "sorted");
      j -= 1;
    }
  }
  updateStyles(null, null, "complete");
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
