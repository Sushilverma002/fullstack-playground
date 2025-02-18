import React from "react";
import Car from "./Car";
function ConditionalRendering() {
  const name = "abc";
  const length = 10;

  const cars = ["Ford", "BMW", "Audi"];

  const multipleCars = [
    { id: 1, brand: "Ford", country: "india" },
    { id: 2, brand: "Ford1", country: "pak" },
    { id: 3, brand: "Ford2", country: "srilanka" },
  ];
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
