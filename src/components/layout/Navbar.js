import { Link } from "react-router-dom";
import React from "react";
import homeIcon from "../../assets/other/homeIcon.svg";

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <Link to='/'>
        <h1 className='text-primary'>Thunder Weather
        </h1>
      </Link>
      <ul className='text-dark'>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
