import Logo from '../Logo.tsx';

const AnnouncementBar = () => {
    return <div className="announcement-bar">
        <Logo></Logo>
        <div className="announcement-bar-links">
            <a href="home">Home</a>
            <a href="characters">Characters & References</a>
            <a href="store">Store</a>
            <a href="https://discord.com/invite/28ZypjypMq">Discord</a>
            <a href="https://www.youtube.com/@Y2NES">Youtube</a>
            <a href="https://y2nes.bandcamp.com">Bandcamp</a>
            <a href="https://open.spotify.com/artist/0j7ysZlkFVCFCYX59vb0hs">Spotify</a>
        </div>
    </div>
}

export default AnnouncementBar