import React from "react";
import { Link, NavLink } from "react-router-dom";

function MainHeader() {
  return (
    <div className="Home">
      <ul>
        {/* <Link to="/">
    <li>Home</li>
  </Link>
  <Link to="/courses">
    <li>Course</li>
  </Link>
  <Link to="/favorite">
    <li>Favorite</li>
  </Link>
  <Link to="/about-us">
    <li>About-us</li>
  </Link> */}

        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/courses">
          <li>Course</li>
        </NavLink>
        <NavLink to="/favorite">
          <li>Favorite</li>
        </NavLink>
        <NavLink to="/about-us">
          <li>About-us</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default MainHeader;
