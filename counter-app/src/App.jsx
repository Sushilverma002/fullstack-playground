import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decrementCount() {
    setCount(count - 1);
  }
  function IncrementCount() {
    setCount(count + 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-600 flex-col gap-10">
      <div className="text-blue-500">
        <h1 className="text-2xl">Increment & Decrement</h1>
      </div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decrementCount}>-</button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <div>
          <button onClick={IncrementCount}>+</button>
        </div>
      </div>
      <button
        onClick={resetCount}
        className="text-white py-2 px-5 rounded-sm text-lg bg-blue-400 "
      >
        Reset
      </button>
    </div>
  );
}

export default App;
