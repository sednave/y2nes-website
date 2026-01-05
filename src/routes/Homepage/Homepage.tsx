import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Marquee from "react-fast-marquee";
import "./Homepage.css";
import SiteBackground from "../../components/backgrounds/SiteBackground";

const Homepage = () => {
  const newsSection = (
    <section id="news-section">
      <div id="news-grid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o7Er2Xo82aU?si=X9y4xYL2a0HcAI61"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <h2>News</h2>
          <h3>New album "ANTI-CULTURED" is coming soon!</h3>
          <p>Subscribe to my Youtube channel for more updates</p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="page">
      <Header />

      <main>
        <Marquee
          autoFill={true}
          className="marquee"
          gradient={true}
          gradientColor="black"
          direction="right"
          speed={50}
        >
          <p>TUNE IN!</p>
          <p>·</p>
        </Marquee>

        {newsSection}

        <Marquee
          autoFill={true}
          className="marquee"
          gradient={true}
          gradientColor="black"
          direction="left"
          speed={50}
        >
          <p>TUNE IN!</p>
          <p>·</p>
        </Marquee>

        <section id="y2nes-social-links">
          <div className="links-container">
            <h2>SOCIAL MEDIA</h2>
            <a
              className="link-button"
              href="https://www.instagram.com/its.y2nes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
            <a
              className="link-button"
              href="https://x.com/wivyrn"
              target="_blank"
              rel="noopener noreferrer"
            >
              TWITTER / X
            </a>
            <a
              className="link-button"
              href="https://bsky.app/profile/wivyrn.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              BLUESKY
            </a>
            <a
              className="link-button"
              href="https://www.tiktok.com/@y.2nes"
              target="_blank"
              rel="noopener noreferrer"
            >
              TIKTOK
            </a>
            <a
              className="link-button"
              href="https://discord.com/invite/28ZypjypMq"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCORD SERVER
            </a>
            <a className="link-button" href="mailto:contact@y2nes.com">
              EMAIL / INQUIRIES
            </a>
          </div>
        </section>

        <Marquee
          autoFill={true}
          className="marquee"
          gradient={true}
          gradientColor="black"
          direction="right"
          speed={50}
        >
          <p>TUNE IN!</p>
          <p>·</p>
        </Marquee>

        <section id="y2nes-music-links">
          <div className="links-container">
            <h2>MUSIC LINKS</h2>
            <a
              className="link-button"
              href="https://open.spotify.com/artist/0j7ysZlkFVCFCYX59vb0hs"
              target="_blank"
              rel="noopener noreferrer"
            >
              SPOTIFY
            </a>
            <a
              className="link-button"
              href="https://music.apple.com/us/artist/y2nes/1813450877"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPLE MUSIC
            </a>
            <a
              className="link-button"
              href="https://www.youtube.com/@Y2NES"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOUTUBE
            </a>
            <a
              className="link-button"
              href="https://y2nes.bandcamp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              BANDCAMP
            </a>
            <a
              className="link-button"
              href="https://soundcloud.com/y2nes"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOUNDCLOUD
            </a>
          </div>
        </section>
        <Marquee
          autoFill={true}
          className="marquee"
          gradient={true}
          gradientColor="black"
          direction="left"
          speed={50}
        >
          <p>TUNE IN!</p>
          <p>·</p>
        </Marquee>
      </main>

      <Footer />
      <SiteBackground />
    </div>
  );
};

export default Homepage;
