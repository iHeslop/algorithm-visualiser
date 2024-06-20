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

const merge = async (
  data: number[],
  low: number,
  mid: number,
  high: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  let num1 = mid - low + 1;
  let num2 = high - mid;
  let leftArray = new Array(num1);
  let rightArray = new Array(num2);

  for (let i = 0; i < num1; i++) {
    leftArray[i] = data[low + i];
  }
  for (let i = 0; i < num2; i++) {
    rightArray[i] = data[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = low;

  while (i < num1 && j < num2) {
    updateStyles(low + i, mid + 1 + j, "swap");
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (leftArray[i] <= rightArray[j]) {
      data[k] = leftArray[i];
      i++;
    } else {
      data[k] = rightArray[j];
      j++;
    }
    k++;
    updateNumbers([...data]);
  }

  while (i < num1) {
    data[k] = leftArray[i];
    i++;
    k++;
    updateNumbers([...data]);
  }

  while (j < num2) {
    data[k] = rightArray[j];
    j++;
    k++;
    updateNumbers([...data]);
  }
  updateStyles(null, null, "complete");
};

export const mergeSort = async (
  data: number[],
  low: number,
  high: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
): Promise<number[]> => {
  if (low >= high) {
    return data;
  }
  let mid = Math.floor(low + (high - low) / 2);
  await mergeSort(data, low, mid, updateNumbers, updateStyles);
  await mergeSort(data, mid + 1, high, updateNumbers, updateStyles);
  await merge(data, low, mid, high, updateNumbers, updateStyles);
  return data;
};
