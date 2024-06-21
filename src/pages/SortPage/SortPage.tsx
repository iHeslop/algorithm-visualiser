import { useContext, useState } from "react";
import SubMenu from "../../components/SubMenu/SubMenu";

import NumberBars from "../../components/NumberBars/NumberBars";
import { NumberContext } from "../../context/NumberContextProvider";

const SortPage = () => {
  const { items, updateSortFunction } = useContext(NumberContext);
  const itemKeys = Object.keys(items);
  const [selectedItem, setSelectedItem] = useState<string>(itemKeys[0]);

  return (
    <>
      <SubMenu
        items={itemKeys}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        updateFunction={updateSortFunction}
      />
      <NumberBars />
    </>
  );
};

export default SortPage;
