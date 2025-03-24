function Product({ product }) {
  return (
    <div className="w-64 p-4 bg-white rounded-2xl shadow-xl">
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
      </div>
      <h3>Rating: {product.rating.rate} ⭐</h3>
      <p>({product.rating.count} Reviews)</p>
    </div>
  );
}

export default Product;
