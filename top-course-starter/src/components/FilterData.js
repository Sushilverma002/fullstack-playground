import React from "react";

function Filter(props) {
  const filterData = props.filteringData;
  return (
    <>
      {filterData.map((items) => (
        <button key={items.id}>{items.title}</button>
      ))}
    </>
  );
}
export default Filter;
