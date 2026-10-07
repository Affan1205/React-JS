import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/labs");
  }
  function backHandler(){
    navigate(-1)
  }
  return (
    <div>
      <div className="text-6xl">This is Support Page.</div>
      <button
        onClick={clickHandler}
        className="bg-red-300 text-[20px] px-2.5 py-2 cursor-pointer hover:bg-red-400"
      >
        Move to Labs Page
      </button>
      <button
        onClick={backHandler}
        className="bg-red-300 text-[20px] px-2.5 py-2 cursor-pointer hover:bg-red-400"
      >
        Go back
      </button>
    </div>
  );
};
export default Support;
