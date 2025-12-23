import Footer from "../../components/Footer.tsx";
import Header from "../../components/header/Header.tsx";
import Marquee from "react-fast-marquee";

const Homepage = () => {
    return <div id="homepage">
        <Header />
        <main>
            <section id="y2nes-social-links">
                <div className="links-container">
                    <strong>SOCIAL MEDIA</strong>
                    <a href="https://www.instagram.com/its.y2nes/">INSTAGRAM</a>
                    <a href="https://x.com/wivyrn">TWITTER / X</a>
                    <a href="https://bsky.app/profile/wivyrn.bsky.social">BLUESKY</a>
                    <a href="https://www.tiktok.com/@y.2nes">TIKTOK</a>
                    <a href="https://y2nes.bandcamp.com">DISCORD SERVER</a>
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
                    <a href="https://open.spotify.com/artist/0j7ysZlkFVCFCYX59vb0hs">SPOTIFY</a>
                    <a href="https://music.apple.com/us/artist/y2nes/1813450877">APPLE MUSIC</a>
                    <a href="https://www.youtube.com/@Y2NES">YOUTUBE</a>
                    <a href="https://y2nes.bandcamp.com">BANDCAMP</a>
                    <a href="https://soundcloud.com/y2nes">SOUNDCLOUD</a>
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