import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-6xl">
      <Outlet></Outlet>
   
    </div>
  );
};

export default Home;
