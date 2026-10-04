import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    //jab left shift pr click hoga toh mujhe index-1 krna ha but agar mera index zero(0) se kaam hojaye toh last mein le aao
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    //jab mein right shift pr click karung toh index , index +1 hota rahega jab tak index <= review.length ha agar index bada hogaya toh first index pe le aao
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function supriseHandler() {
    let random = Math.floor(Math.random() * reviews.length);
    setIndex(random);
  }
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]}></Card>

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500">
          <FiChevronLeft></FiChevronLeft>
        </button>

        <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500">
          <FiChevronRight></FiChevronRight>
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={supriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Suprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
