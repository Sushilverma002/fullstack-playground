import React from "react";
import EachReview from "./EachReview.js";
import { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
// import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const Template = (props) => {
  const reviews = props.reviews;
  const [currentIndex, setCurrentIndex] = useState(0);

  // left move
  function handleLeftButton() {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(reviews.length - 1);
      console.log(reviews.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex - 1);
    }
  }

  function handeRightButton() {
    if (currentIndex + 1 >= reviews.length) {
      setCurrentIndex(0);
      console.log(setCurrentIndex(0));
    } else {
      setCurrentIndex(currentIndex + 1);
      console.log(setCurrentIndex(currentIndex + 1));
    }
  }
  function handleFunSuprise() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setCurrentIndex(randomIndex);
    console.log(setCurrentIndex(randomIndex));
  }
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center ml-[400px]  mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <EachReview key={reviews.id} reviews={reviews[currentIndex]} />
      <div className="flex text 3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={handleLeftButton}
          className="cursor-pointer hover:text-violet-500"
        >
          <IoMdArrowDropleftCircle fontSize="4rem" />
        </button>
        <button
          onClick={handeRightButton}
          className="cursor-pointer hover:text-violet-500"
        >
          <IoMdArrowDroprightCircle fontSize="4rem" />
        </button>
      </div>
      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={handleFunSuprise}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Template;
