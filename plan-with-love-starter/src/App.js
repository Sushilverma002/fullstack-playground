import React from "react";
import { useState } from "react";
import data from "./data";
import Tours from "./component/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  return (
    <div>
      <h1>Plan with Love</h1>
      <Tours tours={tours} />
    </div>
  );
};

export default App;
