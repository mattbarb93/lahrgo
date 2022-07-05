import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social-media">
          <a href="https://www.facebook.com/Lisa-Ahronee-Golub-Paintings-670120049740253/" className="footer-button ">
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
