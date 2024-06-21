import styles from "./SubMenu.module.scss";

interface SubMenuProps {
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  updateFunction: (item: string) => void;
}

const SubMenu = ({
  items,
  selectedItem,
  setSelectedItem,
  updateFunction,
}: SubMenuProps) => {
  const handleClick = (item: string) => {
    updateFunction(item);
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
