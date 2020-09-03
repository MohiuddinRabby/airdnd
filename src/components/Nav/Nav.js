import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="m-auto">
        <img src={logo} alt="logo" style={{ width: "40px" }} />
      </Link>
    </nav>
  );
};

export default Nav;
