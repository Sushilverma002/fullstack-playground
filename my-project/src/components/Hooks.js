// usestate :-> allows us to track the stat function component
import { useState } from "react"; // react -> library  , destructure -> useState

function Hooks() {
  const [color, setColor] = useState("Black");
  // color -> current state
  // set color -> function ( update karega hamari current state)

  return (
    <>
      <div>MY fav colour is {color}!.</div>
      <button type="button" onClick={() => setColor("blue")}>
        click me
      </button>
    </>
  );
}

export default Hooks;
