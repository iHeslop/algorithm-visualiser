import { useContext } from "react";
import SubMenu from "../../components/SubMenu/SubMenu";

import NumberBars from "../../components/NumberBars/NumberBars";
import styles from "./SortPage.module.scss";
import { NumberContext } from "../../context/NumberContextProvider";

const SortPage = () => {
  const { items } = useContext(NumberContext);

  return (
    <>
      <SubMenu items={Object.keys(items)} />
      <div className={styles.grid}>
        <NumberBars />
      </div>
    </>
  );
};

export default SortPage;
