import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const Navigate = useNavigate();
  function handleNavigate() {
    Navigate("/");
  }
  function handleNavigateBack() {
    Navigate(-1);
  }

  return (
    <div>
      <div>About Us</div>
      <button onClick={handleNavigate}>Home</button>
      <button onClick={handleNavigateBack}>Back</button>
    </div>
  );
}

export default AboutUs;
