import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Marquee from "react-fast-marquee";
import "./Homepage.css";
import SiteBackground from "../../components/backgrounds/SiteBackground";
import SocialLinks from "../../components/SocialLinks";
import MusicLinks from "../../components/MusicLinks";
const bannerImage = "/assets/y2nes_banner.png";

const metadata = (
  <>
    <title>Y2NES - Homepage</title>
    <meta
      name="description"
      content="Welcome to Y2NES! You'll find new song releases and other news from Y2NES here."
    />
    <meta
      name="keywords"
      content="Y2NES, Music, Album, Single, Singles, Electronic, EDM, Y2K, Spotify, Youtube, Apple Music"
    />
    <meta name="author" content="Y2NES" />

    <meta property="og:site_name" content="Y2NES" />
    <meta property="og:title" content="Y2NES - Homepage" />
    <meta
      property="og:description"
      content="Welcome to Y2NES! You'll find new song releases and other news from Y2NES here."
    />
    <meta property="og:url" content="https://y2nes.com" />
    <meta property="og:image" content={`https://y2nes.com${bannerImage}`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content="Y2NES - Homepage" />
    <meta
      name="twitter:description"
      content="Welcome to Y2NES! You'll find new song releases and other news from Y2NES here."
    />
    <meta name="twitter:image" content={`https://y2nes.com${bannerImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@wivyrn" />
  </>
);

const Homepage = () => {
  const newsSection = (
    <section id="news-section" className="homepage-section">
      <img
        className="background-image"
        src="https://f4.bcbits.com/img/a2242049588_10.jpg"
        alt="Background image for the news section"
        aria-hidden="true"
      />
      <div id="news-grid" className="floating-card-on-wide">
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
      {metadata}

      <Header />

      <main>
        <h1>Tune in to Y2NES</h1>
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

        <SocialLinks />

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

        <MusicLinks />

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
