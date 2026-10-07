import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  return (
    <div>
      <div className="text-6xl">This is Labs Page.</div>
      <button onClick={clickHandler} className="bg-red-300 text-[20px] px-2.5 py-2 cursor-pointer hover:bg-red-400">Move About Page</button>
    </div>
  );
};

export default Labs;
