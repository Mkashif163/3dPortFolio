import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-20 h-10 bg-white rounded-lg font-bold items-center justify-center flex shadow-lg"
      >
        <p className=" blue-gradient_text ">KASHIF</p>
      </NavLink>
      <nav className="flex gap-7 text-lg font-medium">
        <NavLink
          to="/about"
          className={({isActive}) => isActive ? " text-blue-500" : "text-black"}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({isActive}) => isActive ? " text-blue-500" : "text-black"}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
