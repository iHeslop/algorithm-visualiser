import styles from "./NavBar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { NumberContext } from "../../context/NumberContextProvider";
import { SearchContext } from "../../context/SearchContextProvider";
import { TraversalContext } from "../../context/TraversalContextProvider";

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSortPage = location.pathname === "/sort";
  const isSearchPage = location.pathname === "/search";
  const isTraversalPage = location.pathname === "/traversal";

  const numberContext = useContext(NumberContext);
  const searchContext = useContext(SearchContext);
  const traversalContext = useContext(TraversalContext);

  return (
    <div className={isHomePage ? styles.containerCentered : styles.container}>
      {!isHomePage && (
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
      )}

      <div className={styles.box_title}>
        <img src={logo} alt="logo" className={styles.image}></img>
        <NavLink to="/" className={styles.title}>
          VisuAlgo
        </NavLink>
      </div>

      {isSortPage && numberContext && (
        <div className={styles.box_btns}>
          <p
            className={styles.link_btn}
            onClick={numberContext.randomizeNumbers}
          >
            RANDOMIZE
          </p>
          <p
            className={`${styles.link_btn} ${styles.link_btn_action}`}
            onClick={numberContext.sortNumbers}
          >
            SORT
          </p>
        </div>
      )}
      {isSearchPage && searchContext && (
        <div className={styles.box_btns}>
          <p
            className={styles.link_btn}
            onClick={searchContext.randomizeNumbers}
          >
            RANDOMIZE
          </p>
          <p
            className={`${styles.link_btn} ${styles.link_btn_action}`}
            onClick={searchContext.searchNumbers}
          >
            SEARCH
          </p>
        </div>
      )}
      {isTraversalPage && traversalContext && (
        <div className={styles.box_btns}>
          <p
            className={styles.link_btn}
            onClick={traversalContext.randomizeTree}
          >
            RANDOMIZE
          </p>
          <p
            className={`${styles.link_btn} ${styles.link_btn_action}`}
            onClick={traversalContext.searchTree}
          >
            TRAVERSE
          </p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
