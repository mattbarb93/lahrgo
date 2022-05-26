import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social-media">
          <a href="http://facebook.com" className="footer-button ">
            <i className="fab fa-facebook-f facebook"></i>
          </a>
          <a href="http://instagram.com" className="footer-button">
            <i className=" fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
