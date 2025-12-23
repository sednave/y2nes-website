import Logo from '../Logo.tsx';

const AnnouncementBar = () => {
    return <div className="announcement-bar">
        <Logo></Logo>
        <div className="announcement-bar-links">
            <a href="/home">Home</a>
            <a href="/characters">Characters & References</a>
            <a href="/store">Store</a>
        </div>
    </div>
}

export default AnnouncementBar