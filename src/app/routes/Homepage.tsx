import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Marquee from "react-fast-marquee";

const Homepage = () => {
    return <div id="homepage">
        <Header />
        <main>
            <section id="y2nes-social-links">
                <div className="links-container">
                    <strong>SOCIAL MEDIA</strong>
                    <a href="https://www.instagram.com/its.y2nes/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                    <a href="https://x.com/wivyrn" target="_blank" rel="noopener noreferrer">TWITTER / X</a>
                    <a href="https://bsky.app/profile/wivyrn.bsky.social" target="_blank" rel="noopener noreferrer">BLUESKY</a>
                    <a href="https://www.tiktok.com/@y.2nes" target="_blank" rel="noopener noreferrer">TIKTOK</a>
                    <a href="https://discord.com/invite/28ZypjypMq" target="_blank" rel="noopener noreferrer">DISCORD SERVER</a>
                    <a href="mailto:y2nes.official@gmail.com">EMAIL / INQUIRIES</a>
                </div>
            </section>

            <Marquee autoFill={true} className="marquee" gradient={true} gradientColor="black" direction="right" speed={50}>
                <p>TUNE IN!</p>
                <p>·</p>
            </Marquee>

            <section id="y2nes-music-links">
                <div className="links-container">
                    <strong>MUSIC LINKS</strong>
                    <a href="https://open.spotify.com/artist/0j7ysZlkFVCFCYX59vb0hs" target="_blank" rel="noopener noreferrer">SPOTIFY</a>
                    <a href="https://music.apple.com/us/artist/y2nes/1813450877" target="_blank" rel="noopener noreferrer">APPLE MUSIC</a>
                    <a href="https://www.youtube.com/@Y2NES" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
                    <a href="https://y2nes.bandcamp.com" target="_blank" rel="noopener noreferrer">BANDCAMP</a>
                    <a href="https://soundcloud.com/y2nes" target="_blank" rel="noopener noreferrer">SOUNDCLOUD</a>
                </div>
            </section>

            <Marquee autoFill={true} className="marquee" gradient={true} gradientColor="black" direction="left" speed={50}>
                <p>TUNE IN!</p>
                <p>·</p>
            </Marquee>
        </main>
        <Footer />
    </div>
}

export default Homepage