import { useContext, useState } from "react";
import styles from "./SubMenu.module.scss";
import { NumberContext } from "../../context/NumberContextProvider";

interface SubMenuProps {
  items: string[];
}

const SubMenu = ({ items }: SubMenuProps) => {
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);
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
