// import { useEffect, useState } from "react";
// import Product from "./Product.jsx";

// function Productlist() {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         console.log(data);
//       })

//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);
//   return (
//     <div className="flex flex-col justify-center  gap-6">
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3> {product.title}</h3>
//           {product.category}
//           {product.description}
//           <img
//             src={product.image}
//             alt={product.title}
//             style={{ width: "150px", height: "150px" }}
//           />
//           <p>
//             <b>{product.price}</b>
//           </p>
//           <h3>{product.rating.rate}</h3>
//           <p>{product.rating.count}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Productlist;
// import { useEffect, useState } from "react";
// import Product from "./Product.jsx";

// function Productlist() {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6">
//       {products.map((product) => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default Productlist;
