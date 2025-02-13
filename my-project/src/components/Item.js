import React from "react";

import "./Item.css";

function Item(props) {
  const month = props.month;
  const year = props.year;

  return (
    <div className="items">
      <ul>
        <li>{month}</li>
        <li>{year}</li>
      </ul>
    </div>
  );
}

export default Item;
