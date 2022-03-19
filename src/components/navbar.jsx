import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav nav-pills justify-content-center p-2 shadow">
      <NavLink
        to={"/"}
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        Home
      </NavLink>
      <NavLink
        to={"/users"}
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
