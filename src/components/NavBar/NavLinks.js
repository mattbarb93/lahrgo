import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import "./NavLinks.css";
import { Sidebar } from "semantic-ui-react";

const NavLinks = (props) => {
  const classes = cx(
    "ui",
    { sidebar: props.toggleMenu },
    "sidebar",
    "overlay",
    "vertical",
    "menu",
    "transition",
    { visible: props.toggleMenu },
    { animation: "overlay" }
  );
  //ui sidebar overlay vertical inverted menu animating

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
      //ui sidebar overlay menu  inverted vertical labeled icon ui  left thin
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
