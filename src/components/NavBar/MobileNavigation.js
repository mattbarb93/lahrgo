import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Icon } from "semantic-ui-react";
import { useState } from "react";

const MobileNavigation = ({ onToggleMenu, toggleMenu }) => {
  //use the props to do the same thing

  const hamburgerIcon = (
    <Icon
      name="bars"
      className={classes.Hamburger}
      onClick={() => onToggleMenu()}
    />
  );
  const closeIcon = (
    <Icon
      name="close"
      className={classes.Hamburger}
      onClick={() => onToggleMenu()}
    />
  );

  return (
    <div className={classes.MobileNavigation}>
      <div className="ui top inverted attached menu">
        <Link to="/" className="item">
          Largho
        </Link>

        {toggleMenu && <NavLinks toggleMenu={toggleMenu} />}
        <div className="right item">
          {toggleMenu ? closeIcon : hamburgerIcon}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
