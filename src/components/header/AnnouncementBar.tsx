import { Link } from "react-router";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <Link to="/home" className="logo">
        {/* <img src="https://images.squarespace-cdn.com/content/v1/68cb679662889c19257a6a93/4a8e9918-3e84-4c29-8c9d-1fdac2beb051/STARDUST_PHARMACY_logo_2.png?format=1500w" alt="Y2NES Logo" /> */}
        <strong>Y2NES</strong>
      </Link>
      <div className="announcement-bar-links">
        <Link to="/home">Home</Link>
        <Link to="/characters">Characters & References</Link>
        <Link to="/store">Store</Link>
        <Link to="/music">Music</Link>
      </div>
    </div>
  );
};

export default AnnouncementBar;
