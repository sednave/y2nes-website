import Logo from '../Logo';
import { Link } from 'react-router-dom';

const AnnouncementBar = () => {
    return <div className="announcement-bar">
        <Logo />
        <div className="announcement-bar-links">
            <Link to="/home">Home</Link>
            <Link to="/characters">Characters & References</Link>
            <Link to="/store">Store</Link>
            <Link to="/music">Music</Link>
        </div>
    </div>
}

export default AnnouncementBar