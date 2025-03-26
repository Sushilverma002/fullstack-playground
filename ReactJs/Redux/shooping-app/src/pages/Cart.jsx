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
    <div className="max-w-6xl mx-auto p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items - takes 2/3 space on larger screens */}
          <div className="md:w-2/3">
            {cart.map((cartData, index) => (
              <CartItem item={cartData} itemIndex={index} key={cartData.id} />
            ))}
          </div>

          {/* Cart Summary - takes 1/3 space, sticky position */}
          <div className="md:w-1/3">
            <div className="sticky top-4 p-6 bg-white shadow-lg rounded-lg border border-gray-100">
              <p className="text-green-600 text-xl uppercase font-semibold">
                YOUR CART
              </p>
              <h1 className="text-green-600 text-3xl uppercase mb-4">
                SUMMARY
              </h1>
              <p className="text-gray-700">Order Items: {cart.length}</p>
              <p className="text-gray-700 mb-6">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-lg text-white rounded-md transition duration-200">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h2 className="text-2xl">Your Cart is Empty</h2>
          <Link to="/">
            <button className="bg-lime-600 rounded-md hover:bg-lime-700 px-6 py-2 text-white">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
