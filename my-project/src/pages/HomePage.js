import React from "react";
import Item from "../components/Item";
import ItemDates from "../components/ItemDates";
import Form from "../components/Form";
import ConditionalRendering from "../components/ConditionalRendering";
const data = [
  {
    date: "27",
    month: "jan",
    year: "2003",
  },
  {
    date: "25",
    month: "feb",
    year: "2004",
  },
  {
    date: "01",
    month: "march",
    year: "2007",
  },
];
function HomePage() {
  return (
    <>
      <ConditionalRendering />
      {/* <Form /> */}
      {/* <ItemDates date={data[0].date}>this is my first video of pros.</ItemDates>
      <Item month={data[0].month} year={data[0].year}></Item>

      <ItemDates date={data[1].date}></ItemDates>
      <Item month={data[1].month} year={data[1].year}></Item>

      <ItemDates date={data[2].date}></ItemDates>
      <Item month={data[2].month} year={data[2].year}></Item>

      <div>HomePage</div> */}
    </>
  );
}

export default HomePage;
