import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const EachReview = (props) => {
  let review = props.reviews;

  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-3rem] z-[10] mx-auto">
        <img
          src={review.image}
          alt={review.name}
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      <div className="text-center mt-7">
        <p2 className="tracking-wider font-bold text-2xl capitalize">
          {review.name}
        </p2>
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <ImQuotesLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">{review.text}</div>
      <div className="text-violet-400 mx-auto mt-5">
        <ImQuotesRight />
      </div>
    </div>
  );
};

export default EachReview;
