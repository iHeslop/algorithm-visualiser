import { useContext } from "react";
import { TraversalContext } from "../../context/TraversalContextProvider";
import styles from "./NumberTree.module.scss";

const NumberTree = () => {
  const { numbers, styles: barStyles } = useContext(TraversalContext);

  return (
    <div className={styles.container}>
      {numbers.map((num, index) => (
        <div
          key={index}
          className={`${styles.square} ${styles[barStyles[index]]}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumberTree;
