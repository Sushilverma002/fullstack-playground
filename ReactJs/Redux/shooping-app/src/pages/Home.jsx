import Product from "../components/Product";
import { useEffect, useState } from "react";
import { Sipnner } from "../components/Sipnner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
    setLoading(false);
  }, []);

  return loading ? (
    <Sipnner />
  ) : (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
