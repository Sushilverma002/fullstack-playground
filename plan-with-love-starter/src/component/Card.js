import React from "react";

function Card({ image, id, info, name, price }) {
  return (
    <div>
      <div>
        <div>
          <img src={image}></img>
        </div>

        <div className="deatil-tour">
          <h2>{price}</h2>
          <h1>{name}</h1>
        </div>

        <div className="deatil-tour-description">
          <p>{info}</p>
        </div>
        <div>
          <button>Not Interested</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
