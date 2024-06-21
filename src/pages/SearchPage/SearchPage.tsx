import { useContext, useState } from "react";
import SubMenu from "../../components/SubMenu/SubMenu";
import { SearchContext } from "../../context/SearchContextProvider";
import NumberSquares from "../../components/NumberSquares/NumberSquares";

const SearchPage = () => {
  const { items, updateSearchFunction } = useContext(SearchContext);
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
      <NumberSquares />
    </>
  );
};

export default SearchPage;
