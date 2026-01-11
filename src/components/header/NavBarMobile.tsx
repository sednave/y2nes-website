import { useState, useEffect } from "react";
import { Link } from "react-router";
import navLinks from "./NavLinks";

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

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
            <Link to={navLink.path} onClick={() => setIsMenuOpen(false)}>
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "X" : "☰"}
      </button>
    </nav>
  );
};

export default NavBarMobile;
