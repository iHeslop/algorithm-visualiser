import styles from "./NavBar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { NumberContext } from "../../context/NumberContextProvider";
import { SearchContext } from "../../context/SearchContextProvider";

const NavBar = () => {
  const location = useLocation();
  const isSortPage = location.pathname === "/sort";
  const isSearchPage = location.pathname === "/search";

  const numberContext = useContext(NumberContext);
  const searchContext = useContext(SearchContext);

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
        {isSortPage && numberContext && (
          <>
            <p
              className={styles.link_btn}
              onClick={numberContext.randomizeNumbers}
            >
              RANDOMIZE
            </p>
            <p className={styles.link_btn} onClick={numberContext.sortNumbers}>
              SORT
            </p>
          </>
        )}
        {isSearchPage && searchContext && (
          <>
            <p
              className={styles.link_btn}
              onClick={searchContext.randomizeNumbers}
            >
              RANDOMIZE
            </p>
            <p
              className={styles.link_btn}
              onClick={searchContext.searchNumbers}
            >
              SEARCH
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
