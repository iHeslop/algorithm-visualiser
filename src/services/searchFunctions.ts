export const linearSearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (index1: number | null, action: string) => void
) => {
  for (let i = 0; i < data.length; i++) {
    updateNumbers([...data]);
    updateStyles(i, "current");
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (data[i] == target) {
      updateStyles(null, "complete");
      return data[i];
    }
  }
  updateStyles(null, "complete");
  return target;
};

export const binarySearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (index1: number | null, action: string) => void
) => {
  let low = 0;
  let high = data.length - 1;
  let mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    updateNumbers([...data]);
    updateStyles(mid, "current");
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (data[mid] == target) {
      updateStyles(null, "complete");
      return data[mid];
    }
    if (data[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  updateStyles(null, "complete");
  return target;
};

export const fibonacciSearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (index1: number | null, action: string) => void
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
    updateStyles(i, "current");
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
      updateStyles(null, "complete");
      return i;
    }
  }

  if (fib1 && data[offset + 1] === target) {
    updateStyles(null, "complete");
    return offset + 1;
  }

  updateStyles(null, "complete");
  return -1;
};

export const ternarySearch = async (
  data: number[],
  target: number,
  updateNumbers: (numbers: number[]) => void,
  updateStyles: (index1: number | null, action: string) => void
) => {
  console.log("Ternary Search");
  return target;
};
