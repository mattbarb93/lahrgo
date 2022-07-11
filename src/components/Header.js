import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

//Javascript version of navbar
// $(function () {
//   $('#m_btn').on('click', function (e) {
//     e.preventDefault();
//     $('#m_menu').sidebar('toggle');
//   });
// });

// $(window).resize(function () {
//   // Detect if the resized screen is mobile or desktop width
//   if ($(window).width() > 617) {
//     console.log('desktop');
//     $('#m_menu').sidebar('hide');
//   }
//   else {
//     console.log('mobile');
//   }
// });

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Largho
        </Link>
        <div className="right menu" id="menu">
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
{/* 
        <div
          className="ui inverted sidebar menu vertical slide out"
          id="mobileMenu"
        >
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
        </div> */}
      </div>
    </div>
  );
};

export default Header;
