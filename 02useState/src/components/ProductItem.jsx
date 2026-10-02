import { useState } from "react";
import DateItem from "./DateItem";

function ProductItem(props) {
  // without USE STATE
  //   let title = props.specificItem.title;
  //   function clickHandler(e) {
  //     // title = "IronMan"; // if we want ki agar mera variable ki value change hone pr Ui pe show ho toh
  //     //mein use State Hook ka use karunga
  //     console.log("button clicked");
  //   }

  //WITH USE STATE
  const [title, setTitle] = useState(props.specificItem.title);

  function clickHandler(e) {
    setTitle("Veg Corner");
    console.log("Button Clicked");
  }
  return (
    <div className="bg-green-300 rounded-2xl p-2.5 flex justify-between items-center">
      <DateItem date={props.specificItem.date}></DateItem>
      <p className="text-[20px] font-bold uppercase text-red-500">{title}</p>
      <button onClick={clickHandler} className="bg-white p-2 rounded-4xl cursor-pointer hover:scale-[1.1]">
        Click Me
      </button>
    </div>
  );
}

export default ProductItem;
