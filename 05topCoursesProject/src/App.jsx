import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title); //initially hum all category ke card dikha rahe hai

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network mein dikkat ha");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-[#4a4e69]">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="bg-[#4a4e69]">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {/* JO CARDS HA MERA WOH ON THE BASES OF CATEGORY SHOW HO RAHE HA -> JO CATEGORY HOGI WAHI CARD SHOW HOGA */}
          {loading ? <Spinner></Spinner> : <Cards courses={courses} category={category}></Cards>}
        </div>
      </div>
    </div>
  );
}

export default App;
