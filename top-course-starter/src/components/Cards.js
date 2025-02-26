import React from "react";
import Card from "./Card";
function Cards(props) {
  const courses = props.courses;
  console.log(courses);
  const courseList = [];
  const allData = () => {
    Object.values(courses).forEach((category) => {
      category.forEach((arr) => {
        courseList.push(arr);
      });
    });
    return courseList;
  };
  //   allData();
  console.log(courseList);

  return (
    <div>
      {allData().map((data) => (
        <Card key={data.id} courseDeatils={data} />
      ))}
    </div>
  );
}

export default Cards;
