import React from "react";
import Card from "./Card";
const Tours = (props) => {
  function removeHandler(id) {
    console.log(id);
    props.removeTour(id);
  }

  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with Love</h2>
      </div>
      <div className="cards">
        {/* map-> array ke har ek element ke upar ek function chalata ha jitna data/array ke element honge utni baar function chalega */}
        {/* ALWAYS PASS KEY AS UNIQUE IDENTIFER WHEN USING LIST FUNCTION LIKE MAP(),FILTER() */}
        {props.tours.map((tour) => {
          return <Card {...tour} key={tour.id} removeTour={removeHandler} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
