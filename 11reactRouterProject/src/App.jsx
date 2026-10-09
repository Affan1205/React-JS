import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //starting mein mera user logged in nahi ha
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}></Home>}></Route>
        <Route path="login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard isLoggedIn={isLoggedIn}></Dashboard>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
