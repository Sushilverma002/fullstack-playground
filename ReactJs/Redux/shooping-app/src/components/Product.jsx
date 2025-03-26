import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addtoCart, removeCart } from "../redux/Slices/cartSlice";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);
  console.log(product);
  console.log(cart);
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeCart(product.id));
    toast.warning("Item Removed from Cart!!");
  };

  const addItem = () => {
    dispatch(addtoCart(product));
    toast.success("Item added to Cart!!");
  };
  return (
    <div className="w-64  bg-white shadow-xl hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <h3 className="text-lg font-semibold text-gray-900 truncate">
        {product.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {product.description}
      </p>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover my-4"
      />
      <div className="flex justify-between items-center">
        <span className="text-green-600 text-lg font-bold">
          ${product.price}
        </span>
        {cart.some((p) => p.id === product.id) ? (
          <button
            className="bg-green-600 rounded-md px-2 py-2 hover:bg-green-400"
            onClick={removeItem}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="bg-green-600 rounded-md px-2 py-2 hover:bg-green-400"
            onClick={addItem}
          >
            Add Item
          </button>
        )}
      </div>
      <h3>Rating: {product.rating.rate} ⭐</h3>
      <p>({product.rating.count} Reviews)</p>
    </div>
  );
};

export default Product;
