export const linearSearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  for (let i = 0; i < data.length; i++) {
    updateNumbers([...data]);
    updateStyles(i, null, "current");
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (data[i] == target) {
      updateStyles(null, null, "complete");
      return data[i];
    }
  }
  updateStyles(null, null, "complete");
  return target;
};

export const binarySearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  let low = 0;
  let high = data.length - 1;
  let mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    updateNumbers([...data]);
    updateStyles(mid, null, "current");
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (data[mid] == target) {
      updateStyles(null, null, "complete");
      return data[mid];
    }
    if (data[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  updateStyles(null, null, "complete");
  return target;
};

export const fibonacciSearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  let fib2 = 0;
  let fib1 = 1;
  let fibM = fib1 + fib2;

  while (fibM <= data.length) {
    fib2 = fib1;
    fib1 = fibM;
    fibM = fib1 + fib2;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fib2, data.length - 1);

    updateNumbers([...data]);
    updateStyles(i, null, "current");
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (data[i] < target) {
      fibM = fib1;
      fib1 = fib2;
      fib2 = fibM - fib1;
      offset = i;
    } else if (data[i] > target) {
      fibM = fib2;
      fib1 = fib1 - fib2;
      fib2 = fibM - fib1;
    } else {
      updateStyles(null, null, "complete");
      return i;
    }
  }

  if (fib1 && data[offset + 1] === target) {
    updateStyles(null, null, "complete");
    return offset + 1;
  }

  updateStyles(null, null, "complete");
  return -1;
};

export const ternarySearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  let left = 0;
  let right = data.length - 1;
  while (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    updateNumbers([...data]);
    updateStyles(mid1, mid2, "current");
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (data[mid1] == target) {
      updateStyles(null, null, "complete");
      return mid1;
    }
    if (data[mid2] == target) {
      updateStyles(null, null, "complete");
      return mid2;
    }
    if (target < data[mid1]) {
      right = mid1 - 1;
    } else if (target > data[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  updateStyles(null, null, "complete");
  return target;
};

export const interpolationSearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (
    index1: number | null,
    index2: number | null,
    action: string
  ) => void
) => {
  let low = 0;
  let high = data.length - 1;
  while (low <= high && target >= data[low] && target <= data[high]) {
    if (low == high) {
      if (data[low] == target) {
        updateStyles(null, null, "complete");
        return low;
      }
    }
    let pos = Math.floor(
      low + ((high - low) / (data[high] - data[low])) * (target - data[low])
    );
    updateNumbers([...data]);
    updateStyles(pos, null, "current");
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (data[pos] == target) {
      updateStyles(null, null, "complete");
      return pos;
    }
    if (data[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }
  updateStyles(null, null, "complete");
  return target;
};
