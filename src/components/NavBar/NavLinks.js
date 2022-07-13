import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 990);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 990;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div
      className={`${
        isMobile
          ? "ui sidebar overlay vertical inverted menu animating"
          : "ui secondary pointing menu"
      }`}
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
    </div>
  );
};

export default NavLinks;
