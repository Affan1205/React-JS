import Tours from "./components/Tours";
import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(function (tour) {
      if (tour.id !== id) {
        return tour;
      }
    });
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button
          onClick={() => {
            setTours(data);
          }}
          className=""
        >
          Refresh Content
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
