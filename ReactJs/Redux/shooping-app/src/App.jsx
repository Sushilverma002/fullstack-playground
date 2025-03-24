import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Productlist from "./components/Productlist.jsx";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Productlist />
    </>
  );
};

export default App;
