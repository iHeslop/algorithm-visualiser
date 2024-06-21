import styles from "./HomePage.module.scss";
import search from "../../assets/search.png";
import tree from "../../assets/tree.png";
import chart from "../../assets/barchart.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    navigate(`/${item}`);
  };

  return (
    <div>
      <div className={styles.title}>
        <p className={styles.title_heading}>Welcome to VisuAlgo</p>
        <p className={styles.title_text}>
          VisuAlgo is an interactive platform that visualizes algorithms from
          code. Currently these include Sorting, Search and Traversal
          Algorithms.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <img
            src={chart}
            alt="chart"
            className={styles.img}
            onClick={() => handleClick("sort")}
          />
          <p className={styles.text} onClick={() => handleClick("sort")}>
            SORTING
          </p>
        </div>
        <div className={styles.box}>
          <img
            src={search}
            alt="search"
            className={styles.img}
            onClick={() => handleClick("search")}
          />
          <p className={styles.text} onClick={() => handleClick("search")}>
            SEARCH
          </p>
        </div>
        <div className={styles.box}>
          <img
            src={tree}
            alt="tree"
            className={styles.img}
            onClick={() => handleClick("traversal")}
          />
          <p className={styles.text} onClick={() => handleClick("traversal")}>
            TRAVERSAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
