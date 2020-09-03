import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./Nav.css";
import { useAuth } from "../../global/useAuth";
const Nav = () => {
  const auth = useAuth();
  console.log(auth.singInUser);
  return (
    <nav className="navbar">
      <div className="m-auto">
        <img src={logo} alt="logo" style={{ width: "40px" }} />
        {auth.singInUser ? (
          <span className="px-5">{auth.singInUser.name}</span>
        ) : (
          <Link to="/login" className="px-5">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
