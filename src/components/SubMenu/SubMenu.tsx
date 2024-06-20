import { useContext } from "react";
import styles from "./SubMenu.module.scss";
import { NumberContext } from "../../context/NumberContextProvider";

interface SubMenuProps {
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const SubMenu = ({ items, selectedItem, setSelectedItem }: SubMenuProps) => {
  const { updateSortFunction } = useContext(NumberContext);

  const handleClick = (item: string) => {
    updateSortFunction(item);
    setSelectedItem(item);
  };

  return (
    <div className={styles.container}>
      {items.map((item: string) => (
        <p
          key={item}
          className={`${styles.link} ${
            selectedItem === item ? styles.selected : ""
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default SubMenu;
