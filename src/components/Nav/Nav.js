import React from "react";
import logo from "../../img/air.svg";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand" href="#">
            <img src={logo} style={{ width: "30px", height: "30px" }} alt="" />{" "}
            Airdnd
          </span>
      </nav>
    </div>
  );
};

export default Nav;
