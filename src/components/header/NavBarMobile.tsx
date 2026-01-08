import { useState } from "react";
import { Link } from "react-router";

interface NavLinkType {
  name: string;
  path: string;
}
const navLinks: NavLinkType[] = [
  { name: "Home", path: "/" },
  { name: "Characters & References", path: "/characters" },
  { name: "Music", path: "/music" },
  { name: "Store", path: "/store" },
  { name: "About", path: "/about" },
];

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="nav-bar-mobile">
      <Link to="/">
        <img
          src="/assets/TextLogo.webp"
          alt="Y2NES Logo"
          style={{ height: "6rem" }}
        />
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
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "X" : "="}
      </button>
    </nav>
  );
};

export default NavBarMobile;
