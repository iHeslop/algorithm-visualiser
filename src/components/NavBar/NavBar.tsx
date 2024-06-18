import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink to="/">VisuAlgo</NavLink>
      <NavLink to="/sort">Sort</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/traversal">Traversal</NavLink>
    </>
  );
};

export default NavBar;
