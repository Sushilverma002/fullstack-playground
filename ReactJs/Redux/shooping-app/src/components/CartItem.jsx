import { RiDeleteBinLine } from "react-icons/ri";
import { removeCart } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeCart(item.id));
    toast.warning("Item Removed");
  };

  return (
    <div className=" mt-5 ml-5  cursor-pointer ">
      <div className=" bg-white shadow-xl flex flex-col w-80 ">
        <img
          src={item.image}
          alt={item.title}
          className=" h-48 object-cover my-4"
        />
        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4 ml-4">
          {item.title}
        </h3>
        {/* <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p> */}

        <div className="flex flex-row justify-between">
          <span className="text-white px-4 py-4 ml-4 mb-4 text-lg rounded-md bg-green-600 hover:bg-green-700 ">
            Order Now ${item.price}
          </span>
          <button>
            <RiDeleteBinLine
              className="text-5xl text-red-400 hover:text-red-500"
              onClick={removeFromCart}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
