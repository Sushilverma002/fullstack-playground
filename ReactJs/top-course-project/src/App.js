import React from "react";
import { useState, useEffect } from "react";
import { filterData, apiUrl } from "./data.js";
import Filter from "./components/FilterData.js";
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";

const App = () => {
  // const [data, setData] = useState(filterData);
  const [courses, setCourses] = useState([]);

  const populateCard = async () => {
    try {
      const dataFetch = await fetch(apiUrl);
      const response = await dataFetch.json();
      setCourses(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateCard();
  }, []);

  return (
    <>
      <Header />
      <Filter filteringData={filterData} />
      <Cards courses={courses} />
    </>
  );
};

export default App;
