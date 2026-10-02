import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? `${info}` : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore); //true ha toh false hoga , false ha toh true hoga
  }

  return (
    <div className="card">
      <img src={image} alt="" />

      <div>
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span onClick={readmoreHandler} className="read-more">
            {readmore ? `Showless` : `Readmore`}
          </span>
        </div>
      </div>

      <button
        className="btn-red"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not Intresed
      </button>
    </div>
  );
}
export default Card;
