import React from "react";
import { FcLike } from "react-icons/fc";

function Card(props) {
  const courseDeatils = props.courseDeatils;
  return (
    <div>
      <div>
        <img src={courseDeatils.image.url} alt={courseDeatils.image.alt}></img>
        <button>
          <FcLike fontSize="1.8rem" />
        </button>
      </div>
      <div>
        <h1>{courseDeatils.title}</h1>
        <p>{courseDeatils.description}</p>
      </div>
    </div>
  );
}

export default Card;
