import { Link } from "react-router-dom";

const Logo = () => {
    return <Link to="/home" className="logo">
        {/* <img src="https://images.squarespace-cdn.com/content/v1/68cb679662889c19257a6a93/4a8e9918-3e84-4c29-8c9d-1fdac2beb051/STARDUST_PHARMACY_logo_2.png?format=1500w" alt="Y2NES Logo" /> */}
        <strong>Y2NES</strong>
    </Link>;
}

export default Logo;