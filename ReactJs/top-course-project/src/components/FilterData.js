import React from "react";

const Filter = (props) => {
  let filterData = props.filteringData;
  let category = props.category;
  let setCategory = props.setCategory;

  function handleClickFunc(title) {
    setCategory(title);
  }
  return (
    <div className="flex flex-wrap items-center px-4 py-4 mx-auto">
      {filterData.map((items) => (
        <button key={items.id} onClick={() => handleClickFunc(items.title)}>
          {items.title}
        </button>
      ))}
    </div>
  );
};
export default Filter;
