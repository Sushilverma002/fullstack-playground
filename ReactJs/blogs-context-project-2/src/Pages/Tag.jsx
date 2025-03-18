import React from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import { useLocation, useNavigate } from "react-router-dom";

export const Tag = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <button onClick={() => navigate(-1)}>BACK</button>
        <p>Blogs on {tag}</p>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};
