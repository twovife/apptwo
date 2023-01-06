import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ className }) => {
  return (
    <nav className={`w-full p-5 ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl">aziz project</h1>
        <Link to={"/"} className="rounded border-black border px-2 py-1 text-sm hover:cursor-pointer">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
