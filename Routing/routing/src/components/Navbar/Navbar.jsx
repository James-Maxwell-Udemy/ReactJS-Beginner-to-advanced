import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
