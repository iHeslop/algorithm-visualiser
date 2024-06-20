import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { NumberContext } from "../../context/NumberContextProvider";

const NavBar = () => {
  const { randomizeNumbers, sortNumbers } = useContext(NumberContext);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <NavLink
          to="/sort"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          SORTING
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          SEARCH
        </NavLink>
        <NavLink
          to="/traversal"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          TRAVERSAL
        </NavLink>
      </div>
      <div className={styles.box_title}>
        <img src={logo} alt="logo" className={styles.image}></img>
        <NavLink to="/" className={styles.title}>
          VisuAlgo
        </NavLink>
      </div>
      <div className={styles.box_btns}>
        <p className={styles.link_btn} onClick={randomizeNumbers}>
          RANDOMIZE
        </p>
        <p className={styles.link_btn} onClick={sortNumbers}>
          SORT
        </p>
      </div>
    </div>
  );
};

export default NavBar;
