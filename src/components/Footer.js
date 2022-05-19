import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div class="social-media">
          <a href="http://facebook.com" class="footer-button ">
            <i class="fab fa-facebook-f facebook"></i>
          </a>
          <a href="http://instagram.com" class="footer-button">
            <i class=" fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
