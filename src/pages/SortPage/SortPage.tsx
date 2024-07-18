import { useContext, useState } from "react";
import SubMenu from "../../components/SubMenu/SubMenu";

import NumberBars from "../../components/NumberBars/NumberBars";
import { SortContext } from "../../context/SortContextProvider";
import ComplexityText from "../../components/ComplexityText/ComplexityText";

const SortPage = () => {
  const { items, updateSortFunction } = useContext(SortContext);
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
      <ComplexityText selectedItem={selectedItem} />
    </>
  );
};

export default SortPage;
