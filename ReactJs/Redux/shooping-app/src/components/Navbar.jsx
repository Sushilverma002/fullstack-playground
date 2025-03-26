import { IoCartSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-around bg-white shadow-xl">
      <NavLink className="mt-4 mb-4" to="/">
        <img
          src="https://ecomzy-thisisehtesham.vercel.app/logo.png"
          alt="logo"
          height={20}
          width={150}
        />
      </NavLink>
      <div className="flex flex-row ml-[400px] mt-6 gap-10">
        <NavLink to="/">
          <h3 className="text-2xl text-green-600">Home</h3>
        </NavLink>
        <NavLink to="/cart">
          <IoCartSharp className="h-10 w-10 text-green-600" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
