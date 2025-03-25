import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, cartVal) => acc + cartVal.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-row">
          <div>
            {cart.map((cartData, index) => {
              return (
                <CartItem item={cartData} itemIndex={index} key={cartData.id} />
              );
            })}
          </div>
          <div>
            <h3>YOUR CART</h3>
            <h1>SUMMARY</h1>
            <p>Total Items:{cart.length}</p>
            <p>Total Amount:{totalAmount}</p>
            <button className="hover:cursor-pointer">Checkout Now</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Your Cart is Empty </h2>
          <Link to="/">
            <button>SHOP NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
