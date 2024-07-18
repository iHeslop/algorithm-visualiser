import { useContext } from "react";
import { SortContext } from "../../context/SortContextProvider";
import styles from "./NumberBars.module.scss";

const NumberBars = () => {
  const { numbers, styles: barStyles } = useContext(SortContext);
  return (
    <div className={styles.container}>
      {numbers.map((num, index) => (
        <div
          key={index}
          className={`${styles.bar} ${styles[barStyles[index]]}`}
          style={{ height: num * 6 }}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumberBars;
