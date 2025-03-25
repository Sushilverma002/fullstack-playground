import { IoCartSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-around">
      <NavLink to="/">
        <img
          src="https://ecomzy-thisisehtesham.vercel.app/logo.png"
          alt="logo"
          height={25}
          width={200}
        />
      </NavLink>
      <div className="flex flex-row">
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
