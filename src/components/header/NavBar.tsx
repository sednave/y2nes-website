import { Link } from "react-router";
import navLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src="/assets/TextLogo.webp" alt="Y2NES Logo" />
      </Link>
      <ul className="nav-bar-links">
        {navLinks.map((navLink) => (
          <li key={navLink.name}>
            <Link to={navLink.path}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
