import { Link } from "react-router-dom";


const Footer = () => {
    return <footer>
        <h2>Y2NES</h2>
        <div>
            <h3>Info</h3>
            <Link to="/home">Home</Link>
            <Link to="/characters">Characters & References</Link>
            <Link to="/about">About</Link>
        </div>
    </footer>
}

export default Footer;