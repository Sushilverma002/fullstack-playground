// usestate :-> allows us to track the stat function component
import { useEffect, useState } from "react"; // react -> library  , destructure -> useState

function Hooks() {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    callOnce();
  }, []);

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
