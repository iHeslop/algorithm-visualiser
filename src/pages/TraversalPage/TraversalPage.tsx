import { useContext, useState } from "react";
import { TraversalContext } from "../../context/TraversalContextProvider";
import SubMenu from "../../components/SubMenu/SubMenu";
import ComplexityText from "../../components/ComplexityText/ComplexityText";
import NumberTree from "../../components/NumberTree/NumberTree";

const TraversalPage = () => {
  const { tree, target, items, updateSearchFunction } =
    useContext(TraversalContext);
  const itemKeys = Object.keys(items);
  const [selectedItem, setSelectedItem] = useState<string>(itemKeys[0]);

  return (
    <>
      <SubMenu
        items={itemKeys}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        updateFunction={updateSearchFunction}
      />
      <NumberTree node={tree} target={target} />
      <ComplexityText selectedItem={selectedItem} />
    </>
  );
};

export default TraversalPage;
