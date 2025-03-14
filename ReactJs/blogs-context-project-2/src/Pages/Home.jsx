import React from "react";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
export const Home = () => {
  return (
    <>
      <Header />
      <Blogs />
      <Pagination />
    </>
  );
};
