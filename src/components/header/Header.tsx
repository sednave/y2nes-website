import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavBarMobile />
      <NavBar />
    </header>
  );
};

export default Header;
