import React from "react";
import { Outlet } from "react-router-dom";
function OutletHeader() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default OutletHeader;
