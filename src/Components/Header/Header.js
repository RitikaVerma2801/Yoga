import React from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="list-container">
        <ul className="list-items">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
