import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Marquee from "react-fast-marquee";
import SiteBackground from "../../components/backgrounds/SiteBackground";
import "./About.css";
import { Helmet } from "react-helmet-async";

const metaData = (
  <Helmet>
    <title>About | Y2NES</title>
    <meta name="description" content="Background information on Y2NES." />
    <meta name="keywords" content="Y2NES, Information, Info, About, EDM, Y2K" />
    <meta name="author" content="Y2NES" />

    <meta property="og:title" content="About | Y2NES" />
    <meta
      property="og:description"
      content="Background information on Y2NES."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://y2nes.com/about" />
  </Helmet>
);

const About = () => {
  return (
    <div className="page">
      {metaData}
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
