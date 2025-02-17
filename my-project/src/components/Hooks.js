// usestate :-> allows us to track the stat function component
import { useEffect, useState } from "react"; // react -> library  , destructure -> useState

function Hooks() {
  const [counter, setCount] = useState(0);
  // const [text, setText] = useState();

  useEffect(() => {
    callOnce();
  }, []); // -> empty array , pros and state // skip ->no dependency passes.

  // no depnedency passes
  useEffect(() => {
    // run on every render
  });

  // an empty array
  useEffect(() => {
    // runs only on the first render
  });
  function callOnce() {
    console.log("called for once only");
  }

  return (
    <>
      <button type="button" onClick={() => setCount(counter + 1)}>
        Counter {counter}
      </button>
    </>
  );
}

export default Hooks;
