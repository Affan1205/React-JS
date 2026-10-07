import { NavLink, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import Labs from "./components/Labs";
import HomeDefault from "./components/HomeDefault";

// function App() {
//   return (
//     <div className="App">
//       {/* Agar mera page bahut bada ho toh kya mein jese abhi element mein div dala ha wasie likhunga -> nahi ,therefore hum component banayenge aur element mein call krdenge */}
//       {/* <Routes>
//         <Route path="/" element={<div>Home Page</div>}></Route>
//         <Route path="/about" element={<div>About Page</div>}></Route>
//         <Route path="/support" element={<div>Support Page</div>}></Route>
//         <Route path="/labs" element={<div>Labs Page</div>}></Route>/}
//         <Route path="/labs" element={<div>Not found Page</div>}></Route> {/* path = (*) matlab jitne bhi path diye hue ha agar unko chodh kr koi aur path daaloge toh * wale route se match hojayega
//       </Routes> */}

//       {/* ============================================================================================= */}

//       {/* <nav>
//         <div>
//           <Link to="/">Home</Link>
//         </div>
//         <div>
//           <Link to="/about">About</Link>
//         </div>
//         <div>
//           <Link to="/support">Support</Link>
//         </div>
//         <div>
//           <Link to="/labs">Labs</Link>
//         </div>
//       </nav> */}

//       {/* USING NAVLINK REACT BY DEFAULT ADD AN ACTIVE CLASS WHICH TELL WHICH PAGE IS CURRENTLY SELECTED */}
//       <nav>
//         <div className='text-3xl'>
//           <NavLink to="/">Home</NavLink>
//         </div>
//         <div className='text-3xl'>
//           <NavLink to="/about">About</NavLink>
//         </div>
//         <div className='text-3xl'>
//           <NavLink to="/support">Support</NavLink>
//         </div>
//         <div className='text-3xl'>
//           <NavLink to="/labs">Labs</NavLink>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home></Home>}></Route>
//         <Route path="/about" element={<About></About>}></Route>
//         <Route path="/support" element={<Support></Support>}></Route>
//         <Route path="/labs" element={<Labs></Labs>}></Route>
//         <Route path="*" element={<NotFound></NotFound>}></Route>
//       </Routes>
//     </div>
//   );
// }

// ============================================================================================//
//================================= NESTED ROUTING ============================================//
// ============================================================================================//

function App() {
  return (
    <div className="App">
      <nav>
        <div className="text-3xl">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="text-3xl">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="text-3xl">
          <NavLink to="/support">Support</NavLink>
        </div>
        <div className="text-3xl">
          <NavLink to="/labs">Labs</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<HomeDefault></HomeDefault>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
