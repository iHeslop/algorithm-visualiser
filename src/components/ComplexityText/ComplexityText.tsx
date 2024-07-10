import styles from "./ComplexityText.module.scss";

interface ComplexityProps {
  selectedItem: string;
}

const complexityInfo: {
  [key: string]: { time: string; space: string; description: string };
} = {
  "SELECTION SORT": {
    time: "O(n^2)",
    space: "O(1)",
    description:
      "This algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.",
  },
  "BUBBLE SORT": {
    time: "O(n^2)",
    space: "O(1)",
    description:
      "This algorithm repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
  },
  "INSERTION SORT": {
    time: "O(n^2)",
    space: "O(1)",
    description:
      "This algorithm builds the final sorted array one item at a time. It picks the next element and inserts it into the correct position in the sorted part of the array.",
  },
  "QUICK SORT": {
    time: "O(n log n)",
    space: "O(1)",
    description:
      " This algorithm selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. It is then recursively applied to the sub-arrays.",
  },
  "MERGE SORT": {
    time: "O(n log n)",
    space: "O(n)",
    description:
      "This algorithm divides the array into two halves, recursively sorts them, and then merges the two sorted halves.",
  },
  "LINEAR SEARCH": {
    time: "Best Case: O(1). Worst Case: O(n)",
    space: "O(1)",
    description:
      "This algorithm sequentially checks each element of the list until the desired element is found or the list is exhausted.",
  },
  "BINARY SEARCH": {
    time: "O(log n)",
    space: "O(1)",
    description:
      "This algorithm efficiently finds an element in a sorted array by repeatedly dividing the search interval in half.",
  },
  "FIBONACCI SEARCH": {
    time: "O(log n)",
    space: "O(1)",
    description:
      "This algorithm is similar to binary search but uses Fibonacci numbers to divide the array into sub-arrays.",
  },
  "TERNARY SEARCH": {
    time: "O(log3 n)",
    space: "O(1)",
    description:
      "This algorithm divides the array into three parts and determines which part contains the desired element. It then recursively searches that part.",
  },
  "INTERPOLATION SEARCH": {
    time: "O(log2(log2 n))",
    space: "O(1)",
    description:
      "This algorithm is an improved variant of binary search, designed for uniformly distributed data. It estimates the position of the desired element.",
  },
  "BREADTH FIRST SEARCH": {
    time: "O(V + E)",
    space: "O(V)",
    description:
      "This algorithm traverses a graph level by level, starting from a given node, and explores all its neighbors before moving to the next level.",
  },
  "DEPTH FIRST SEARCH": {
    time: "O(V + E)",
    space: "O(V)",
    description:
      "This algorithm explores a graph by diving as deep as possible along each branch before backtracking.",
  },
  "DIJKSTRA'S ALGORITHM": {
    time: "O(E * log V)",
    space: "O(V)",
    description:
      "This algorithm finds the shortest path from a starting node to all other nodes in a weighted graph with non-negative weights. It uses a priority queue to explore nodes in the order of their current shortest distance.",
  },
};

const ComplexityText = ({ selectedItem }: ComplexityProps) => {
  const complexity = complexityInfo[selectedItem] || {
    time: "N/A",
    space: "N/A",
    description: "N/A",
  };
  return (
    <div className={styles.container}>
      <p>Time Complexity: {complexity.time}</p>
      <p>Space Complexity: {complexity.space}</p>
      <p>Description: {complexity.description}</p>
    </div>
  );
};

export default ComplexityText;
