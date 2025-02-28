import React from "react";
import Header from "./Componenets/Header.js";
import reviews from "./data.js";
import Template from "./Componenets/Templates.js";

const App = () => {
  return (
    <div>
      <Header heading="Our Testimonial" />
      <Template reviews={reviews} />
    </div>
  );
};

export default App;
