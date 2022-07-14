import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = ({ onToggleMenu, toggleMenu }) => {
  //Pass down the props down once more
  return (
    <div>
      <Navigation />
      <MobileNavigation toggleMenu={toggleMenu} onToggleMenu={onToggleMenu} />
    </div>
  );
};

export default NavBar;
