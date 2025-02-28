import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const EachReview = (props) => {
  let review = props.reviews;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{review.name}</h2>
          <p className="text-gray-600">{review.job}</p>
        </div>
      </div>
      <ImQuotesLeft />
      <p className="text-gray-700">{review.text}</p>
      <ImQuotesRight />
    </div>
  );
};

export default EachReview;
