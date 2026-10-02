import React, { useState } from "react";

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadMore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadMore(!readmore); //true ha toh false hoga , false ha toh true hoga
  }

  return (
    <div className="card">
      <img src={image} className="image" alt="img" />

      <div className="tourInfo">
        <div className="tourDetails">
          <h4 className="tourPrice">{`$${price}`}</h4>
          <h4 className="tourName">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="readMore" onClick={readmoreHandler}>
            {readmore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      {/* jis city ko hum remove krna chahate hn us city ke data ko humein Tours wale data se remove
]         krna hoga (but remove kese karenge ? hum card ki id ka use karenge remove krne ke liye kyuki woh 
          humesha unique hoti ha aur uss id ko hum pass karenge from child to parent using concept(props function))
          and dubara render karana hoga jo baache hue cards hn*/}
      <button className="btnRed" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
