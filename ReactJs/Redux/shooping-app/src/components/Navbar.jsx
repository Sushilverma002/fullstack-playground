import { IoCartSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">
        <img src="../Images" alt="logo" />
      </NavLink>
      <div>
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/cart">
          <IoCartSharp />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
