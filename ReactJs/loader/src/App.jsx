import Book from "./Book.jsx";
import "./common.css";
// import Loader from "./components/Loader.jsx";
// import RotatingSquare from "./components/RotatingSquare.jsx";

// import { useState, useEffect } from "react";

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);

  //   const timer = setTimeout(() => {
  //     console.log("hi i am the data after loading");
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading ? <Book /> : "hii"} */}
      {/* <Loader
        topColor="blue" // Blue
        rightColor="red" // Red
        bottomColor="green"
        leftColor="yellow"
      />
      <RotatingSquare /> */}
      <Book />
    </>
  );
}

export default App;
