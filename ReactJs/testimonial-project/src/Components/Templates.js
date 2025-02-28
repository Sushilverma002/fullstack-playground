import React from "react";
import EachReview from "./EachReview.js";
import { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
// import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const Template = ({ reviews }) => {
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
    <div>
      {reviews.map((review) => (
        <EachReview key={review.id} reviews={review} />
      ))}
      <div>
        <div>
          <button onClick={handleLeftButton}>
            <IoMdArrowDropleftCircle fontSize="4rem" />
          </button>
          <button onClick={handeRightButton}>
            <IoMdArrowDroprightCircle fontSize="4rem" />
          </button>
        </div>
        <button
          className="text-2xl px-2 py-2 mx-auto flex flex-col justify-center items-center font-bold bg-violet-300 text-white border rounded hover:bg-violet-600 transition-all"
          onClick={handleFunSuprise}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Template;
