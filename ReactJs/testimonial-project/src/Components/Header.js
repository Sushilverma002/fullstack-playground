import React from "react";

function Header({ heading }) {
  return (
    <div className="text-center">
      <h1 className=" font-bold text-4xl text-black-600 my-4 p-4">{heading}</h1>
      <hr className="h-[5px] w-[150px] mx-auto bg-black" />
    </div>
  );
}
export default Header;
