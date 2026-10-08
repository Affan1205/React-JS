import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto">
      <div className="bg-violet-300 flex justify-center item-center ">
        <div className="w-[80%] flex justify-between item-center">
          <div className="text-[20px] p-[20px] font-semibold cursor-pointer hover:text-[#fafafa]">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="text-[20px]  p-[20px] font-semibold cursor-pointer hover:text-[#fafafa]">
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="text-[20px] p-[20px] font-semibold cursor-pointer hover:text-[#fafafa] ">
            <NavLink to="/product">Product</NavLink>
          </div>
          <div className="text-[20px] p-[20px] font-semibold cursor-pointer hover:text-[#fafafa] ">
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route
            index
            element={<HomeDefaultContent></HomeDefaultContent>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
import { Form } from "react-router-dom";
import Product from "./components/Product";
import Contact from "./components/Contact";
import HomeDefaultContent from "./components/HomeDefaultContent";

export default App;
