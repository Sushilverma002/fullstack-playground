import React from "react";

function Car(props) {
  return (
    <>
      <div>{props.keysvalues}</div>
      <div>{props.brand}</div>
      <div>{props.country}</div>
    </>
  );
}

export default Car;
