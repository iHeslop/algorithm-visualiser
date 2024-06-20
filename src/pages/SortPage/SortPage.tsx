import { useContext, useState } from "react";
import SubMenu from "../../components/SubMenu/SubMenu";

import NumberBars from "../../components/NumberBars/NumberBars";
import styles from "./SortPage.module.scss";
import { NumberContext } from "../../context/NumberContextProvider";

const SortPage = () => {
  const { items } = useContext(NumberContext);
  const itemKeys = Object.keys(items);
  const [selectedItem, setSelectedItem] = useState<string>(itemKeys[0]);

  return (
    <>
      <SubMenu
        items={itemKeys}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className={styles.grid}>
        <NumberBars />
      </div>
    </>
  );
};

export default SortPage;
