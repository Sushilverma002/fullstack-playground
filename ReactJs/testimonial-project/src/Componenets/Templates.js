import React from "react";
import EachReview from "./EachReview.js";

const Template = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <EachReview key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Template;
