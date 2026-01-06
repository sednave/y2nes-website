import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Marquee from "react-fast-marquee";
import SiteBackground from "../../components/backgrounds/SiteBackground";
import "./About.css";
import bannerImage from "/assets/y2nes_banner.png";

const metadata = (
  <article>
    <title>About | Y2NES</title>
    <meta name="description" content="Background information on Y2NES." />
    <meta name="keywords" content="Y2NES, Information, Info, About, EDM, Y2K" />
    <meta name="author" content="Y2NES" />

    <meta property="og:site_name" content="Y2NES" />
    <meta property="og:title" content="About | Y2NES" />
    <meta
      property="og:description"
      content="Background information on Y2NES."
    />
    <meta property="og:url" content="https://y2nes.com/about" />
    <meta property="og:image" content={`https://y2nes.com${bannerImage}`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content="About | Y2NES" />
    <meta
      name="twitter:description"
      content="Background information on Y2NES."
    />
    <meta name="twitter:image" content={`https://y2nes.com${bannerImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@wivyrn" />
  </article>
);

const About = () => {
  return (
    <div className="page">
      {metadata}
      <Header />

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

      <main>
        <section id="about-section">
          <h1>About Y2NES</h1>
          <p>
            Y2NES is a Y2K-inspired electronic music producer. Y2NES's glitchy
            and funky music is a message for outsiders, for anyone told they
            don’t fit or don't belong, to fight back and reclaim the magic the
            system itself stole from them.
          </p>

          <p>It's pronounced "Y-tunes".</p>
        </section>
      </main>

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

      <Footer />
      <SiteBackground />
    </div>
  );
};

export default About;
