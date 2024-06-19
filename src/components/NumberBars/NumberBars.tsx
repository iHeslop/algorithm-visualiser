import { useContext } from "react";
import { NumberContext } from "../../context/NumberContextProvider";
import styles from "./NumberBars.module.scss";

const NumberBars = () => {
  const { numbers } = useContext(NumberContext);
  return (
    <div className={styles.container}>
      {numbers.map((num) => (
        <div key={num} className={styles.bar} style={{ height: num * 6 }}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumberBars;
