import styles from "./SubMenu.module.scss";

interface SubMenuProps {
  items: Array<string>;
  updateFunction: (sort: string) => void;
}

const SubMenu = ({ items, updateFunction }: SubMenuProps) => {
  return (
    <div className={styles.container}>
      {items.map((item: string) => (
        <p
          key={item}
          className={styles.link}
          onClick={() => updateFunction(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default SubMenu;
