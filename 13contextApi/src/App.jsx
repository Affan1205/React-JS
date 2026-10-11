import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import AppContextProvider, { AppContext } from "./context/AppContext";
function App() {
  
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);
 
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
