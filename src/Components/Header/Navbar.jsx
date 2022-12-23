import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillPersonPlusFill,
  BsFillArrowRightSquareFill,
  BsBank2,
} from "react-icons/bs";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav
      style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      className="navbar"
    >
      <ul className="navbar-links">
        <li onClick={()=> setToggle(false)} className="navbar-link">
          <AiFillHome className="icon-nav" />
          Home
        </li>
        <li onClick={()=> setToggle(false)} className="navbar-link">
          <BsBank2 className="icon-nav" />
          About
        </li>
        <li onClick={()=> setToggle(false)} className="navbar-link">
          <BsFillArrowRightSquareFill className="icon-nav" />
          Login
        </li>
        <li onClick={()=> setToggle(false)} className="navbar-link">
          <BsFillPersonPlusFill className="icon-nav" />
          Register
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
