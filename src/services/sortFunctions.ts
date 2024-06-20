// Selection Sort:

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

// Bubble Sort:

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

// Insertion Sort:

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

// Quick Sort:

const partition = async (
  data: number[],
  low: number,
  high: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
): Promise<number> => {
  let pivot = data[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (data[j] < pivot) {
      i++;
      [data[i], data[j]] = [data[j], data[i]];
      updateNumbers([...data]);
      updateStyles(i, j, "swap");
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateStyles(i, j, "sorted");
    }
  }

  [data[i + 1], data[high]] = [data[high], data[i + 1]];
  updateNumbers([...data]);
  updateStyles(i + 1, high, "swap");
  await new Promise((resolve) => setTimeout(resolve, 500));
  updateStyles(i + 1, high, "sorted");

  return i + 1;
};

export const quickSort = async (
  data: number[],
  low: number,
  high: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  if (low < high) {
    let partitionIndex = await partition(
      data,
      low,
      high,
      updateNumbers,
      updateStyles
    );
    await quickSort(data, low, partitionIndex - 1, updateNumbers, updateStyles);
    await quickSort(
      data,
      partitionIndex + 1,
      high,
      updateNumbers,
      updateStyles
    );
  } else {
    if (low >= 0 && high >= 0 && low < data.length && high < data.length) {
      updateStyles(low, high, "sorted");
    }
  }
  updateStyles(null, null, "complete");
  return data;
};

// Merge Sort:

export const mergeSort = async (
  data: number[],
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  console.log("Merge Sort");
  return [];
};
