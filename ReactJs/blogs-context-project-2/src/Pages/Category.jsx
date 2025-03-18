import React from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";

export const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <p>Blogs On {category}</p>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};
