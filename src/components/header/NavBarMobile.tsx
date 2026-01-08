import { useState } from "react";
import { Link } from "react-router";
import navLinks from "./NavLinks";

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="nav-bar-mobile">
      <Link to="/">
        <img src="/assets/TextLogo.webp" alt="Y2NES Logo" />
      </Link>
      <ul
        className={`nav-bar-links-mobile ${isMenuOpen ? "nav-links-open" : ""}`}
      >
        {navLinks.map((navLink) => (
          <li key={navLink.name}>
            <Link to={navLink.path}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "X" : "☰"}
      </button>
    </nav>
  );
};

export default NavBarMobile;
