import React from "react";

function Functionalites() {
  const cart = [
    { id: 1, name: "Laptop", price: 5000, checkList: true },
    { id: 2, name: "phone", price: 15000, checkList: false },
    { id: 3, name: "headphone", price: 50000, checkList: true },
  ];

  // reduce in js: put on some array
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  //acc -> will start from zero.
  // inital state  = 0;

  //filter : data ko filter karta hai based on condition, searching, list, or removing unwanted items
  // creates an new array which return the true

  const compeletdCart = cart.filter((task) => task.checkList);
  console.log(compeletdCart);

  //find function -> this is the method returns the array/data which specifies the condition

  const findFunction = cart.find((user) => user.id === 2);

  // findIndex : it find the index and return the poistion of array the first matching elements in an array. if there is no match then return -1;
  const array = ["hello", "hi"];
  const findIndex = array.findIndex((product) => product === "hi");

  const stringStr = "this is long blog post about the react";
  return (
    <div>
      <h1>Hello Jee</h1>
      <h2>totalPrice: ₹{totalPrice}</h2>

      <ul>
        {compeletdCart.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>

      <h1>the cart data : {findFunction ? findFunction.name : "not Found"}</h1>
      <h1>the cart Index will be data : {findIndex}</h1>
      <h1>{stringStr.substring(5, 10)}</h1>
    </div>
  );
}

export default Functionalites;
