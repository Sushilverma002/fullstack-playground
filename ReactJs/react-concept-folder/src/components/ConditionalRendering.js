import React from "react";
import Car from "./Car";
function ConditionalRendering() {
  const name = "abc";
  const length = 10;

  const cars = ["Ford", "BMW", "Audi"];

  const multipleCars = [
    { id: 1, brand: "Ford", country: "india", toggelValue: true, price: 5000 },
    { id: 2, brand: "Ford1", country: "pak", toggelValue: false, price: 80000 },
    {
      id: 3,
      brand: "Ford2",
      country: "srilanka",
      toggelValue: true,
      price: 10000,
    },
  ];

  // reduce:-> input -> array
  // total , sum , count ,

  //syntax
  /* mulitpleCar.reduce((accumaltor, currentIndex)) 
    accumaltor-> callback function.
    currentIndex -> default store
  
  */

  const totalPrice = multipleCars.reduce((acc, item) => acc + item.price, 0);

  // filter function
  // conditional value, func ,-> data ko filter. true, false.

  const filterValue = multipleCars.filter((data) => data.toggelValue === true);

  // substring
  const str = "this is my first project of REACT";
  const substringValue = str.substring(0, 10);

  const sampleArray = ["hi", "hello"];
  // find
  const findData = multipleCars.find((data) => data.id === 2);

  // findIndex: only find index of the data

  const findIndex = sampleArray.findIndex((arr) => arr === "hi");

  console.log(filterValue);
  return (
    <>
      <div>
        <h1>this is main div</h1>
      </div>
      {name === "ram" ? (
        <div>
          <h1>Hello i am the div no 1, with name as ram</h1>
        </div>
      ) : (
        <div>
          <h1>this is div 2 with name as xyz</h1>
        </div>
      )}

      {/* <div>
        <ul>
          {cars.map((car) => (
            <Car brand={car} />
          ))}
        </ul>
      </div> */}
      <div>
        <ul>
          {multipleCars.map((multicar) => (
            <Car
              keysvalues={multicar.id}
              brand={multicar.brand}
              country={multicar.country}
            />
          ))}
        </ul>
      </div>

      <h2>total Price is :{totalPrice}</h2>

      <ul>
        {filterValue.map((val) => (
          <li key={val.id}>{val.brand}</li>
        ))}
      </ul>

      <div>{substringValue}</div>
      <div>{findIndex}</div>
      <ul>{findData.brand}</ul>
    </>
  );

  // logical &&
  // return (
  //   <>
  //     <h1>Cars</h1>
  //     {name === "xyz" && <h2>this is car end it's length will be {length}.</h2>}
  //   </>
  // );
}

export default ConditionalRendering;
