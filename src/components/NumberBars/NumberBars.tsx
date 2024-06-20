import { useContext } from "react";
import { NumberContext } from "../../context/NumberContextProvider";
import styles from "./NumberBars.module.scss";

const NumberBars = () => {
  const { numbers, styles: barStyles } = useContext(NumberContext);
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
