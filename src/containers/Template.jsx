import React from "react";
import Navbar from "./Navbar";

const Template = ({ children }) => {
  return (
    <div className="relative">
      <Navbar className={`sticky top-0 left-0 z-10`} />
      {children}
    </div>
  );
};

export default Template;
