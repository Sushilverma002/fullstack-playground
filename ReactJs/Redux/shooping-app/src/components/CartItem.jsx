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
    <div className="w-64  bg-white shadow-xl ">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover my-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 truncate">
        {item.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-green-600 text-lg font-bold">${item.price}</span>
        <button>
          <RiDeleteBinLine onClick={removeFromCart} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
