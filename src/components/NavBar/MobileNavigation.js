import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Icon } from "semantic-ui-react";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <Icon
      name="bars"
      className={classes.Hamburger}
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <Icon
      name="close"
      className={classes.Hamburger}
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <div className={classes.MobileNavigation}>
      <div
        className="ui top inverted attached menu"
        onClick={() => setOpen(!open)}
      >
        <Link to="/" className="item">
          Largho
        </Link>

        {open && <NavLinks />}
        <div className="right item">{open ? closeIcon : hamburgerIcon}</div>
      </div>
    </div>
  );
};

export default MobileNavigation;
