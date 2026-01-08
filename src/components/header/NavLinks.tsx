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

export default navLinks;
