import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementHandler() {
    setCounter(counter + 1);
  }

  function decrementHandler() {
    setCounter(counter - 1);
  }

  function resetHandler() {
    setCounter(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100 font-sans">

      <div className="text-center p-8 bg-gray-900 border border-gray-800 rounded-2xl shadow-xl max-w-xs w-full">
        
        <h1 className="text-xl font-semibold tracking-wide uppercase text-white mb-1 font-mono">Counter App</h1>

        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-6">Increment & Decrement</p>

        {/* Counter Controls */}
        <div className="flex items-center justify-between bg-gray-950 border border-gray-800 rounded-xl p-2 select-none mb-4">
          <button onClick={decrementHandler} className="w-12 h-12 flex items-center justify-center text-xl font-medium rounded-lg text-white hover:bg-gray-800 active:scale-95 transition-all">
            &minus;
          </button>

          <span className="text-3xl font-semibold tabular-nums px-4">{counter}</span>

          <button onClick={incrementHandler} className="w-12 h-12 flex items-center justify-center text-xl font-medium rounded-lg text-white hover:bg-gray-800 active:scale-95 transition-all">
            +
          </button>
        </div>

        <button
          onClick={resetHandler}
          className="w-full py-2.5 text-xs font-medium uppercase tracking-wider text-gray-400 bg-gray-950 border border-gray-800 rounded-xl hover:bg-gray-800 hover:text-white active:scale-[0.98] transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
