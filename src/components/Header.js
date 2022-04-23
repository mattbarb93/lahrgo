import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Largho
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/biography" className="item">
          Biography
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
        <Link to="/exhibitions" className="item">
          Exhibitions
        </Link>
        <Link to="/paintings" className="item">
          Other Paintings
        </Link>
      </div>
    </div>
  );
};

export default Header;
