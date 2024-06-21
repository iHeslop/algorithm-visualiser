import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import styles from "./NumberSquares.module.scss";

const NumberSquares = () => {
  const { numbers, styles: barStyles } = useContext(SearchContext);
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

export default NumberSquares;
