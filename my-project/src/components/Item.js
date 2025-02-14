import React, { useEffect } from "react";

import "./Item.css";

function Item(props) {
  const month = props.month;
  const year = props.year;

  useEffect(() => {
    callOnce();
  }, [props]);

  function callOnce() {
    console.log("Need to be call for once only");
  }

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
