import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <div className="ui secondary pointing menu container">
        <Link to="/" className="item">
          Largho
        </Link>
        <div className="right menu" id="menu">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
