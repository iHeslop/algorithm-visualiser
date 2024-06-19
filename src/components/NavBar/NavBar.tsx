import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <NavLink to="/sort" className={styles.link}>
          SORTING
        </NavLink>
        <NavLink to="/search" className={styles.link}>
          SEARCH
        </NavLink>
        <NavLink to="/traversal" className={styles.link}>
          TRAVERSAL
        </NavLink>
      </div>
      <div className={styles.box_title}>
        <img src={logo} alt="logo" className={styles.image}></img>
        <NavLink to="/" className={styles.title}>
          VisuAlgo
        </NavLink>
      </div>
      <div className={styles.box}>
        <p className={styles.link_btn}>RANDOMIZE</p>
        <p className={styles.link_btn}>SORT</p>
      </div>
    </div>
  );
};

export default NavBar;
