import styles from "./ComplexityText.module.scss";

interface ComplexityProps {
  selectedItem: string;
}

const complexityInfo: { [key: string]: { time: string; space: string } } = {
  "SELECTION SORT": {
    time: "O(n^2)",
    space: "O(1)",
  },
  "BUBBLE SORT": {
    time: "O(n^2)",
    space: "O(1)",
  },
  "INSERTION SORT": {
    time: "O(n^2)",
    space: "O(1)",
  },
  "QUICK SORT": {
    time: "O(n log n)",
    space: "O(1)",
  },
  "MERGE SORT": {
    time: "O(n log n)",
    space: "O(n)",
  },
  "LINEAR SEARCH": {
    time: "Best Case: O(1). Worst Case: O(n)",
    space: "O(1)",
  },
  "BINARY SEARCH": {
    time: "O(log n)",
    space: "O(1)",
  },
  "FIBONACCI SEARCH": {
    time: "O(log n)",
    space: "O(1)",
  },
  "TERNARY SEARCH": {
    time: "O(log3 n)",
    space: "O(1)",
  },
  "INTERPOLATION SEARCH": {
    time: "O(log2(log2 n))",
    space: "O(1)",
  },
  "BREADTH FIRST SEARCH": {
    time: "O(V + E)",
    space: "O(V)",
  },
  "DEPTH FIRST SEARCH": {
    time: "O(V + E)",
    space: "O(V)",
  },
  "DIJKSTRA'S ALGORITHM": {
    time: "O(E * log V)",
    space: "O(V)",
  },
};

const ComplexityText = ({ selectedItem }: ComplexityProps) => {
  const complexity = complexityInfo[selectedItem] || {
    time: "N/A",
    space: "N/A",
  };
  return (
    <div className={styles.container}>
      <p>Time Complexity: {complexity.time}</p>
      <p>Space Complexity: {complexity.space}</p>
    </div>
  );
};

export default ComplexityText;
