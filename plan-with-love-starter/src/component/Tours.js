import React from "react";
import Card from "./Card";

function Tours({ tours }) {
  return (
    <div>
      <div>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
