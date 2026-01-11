import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Marquee from "react-fast-marquee";
import SiteBackground from "../components/backgrounds/SiteBackground";
import SocialLinks from "../components/SocialLinks";
import MusicLinks from "../components/MusicLinks";
const bannerImage = "/assets/y2nes_banner.png";

const metadataTitle = "Links | Y2NES";
const metadataDescription =
  "Links to Y2NES's official accounts on other platforms";
const metadata = (
  <article>
    <title>{metadataTitle}</title>
    <meta name="description" content={metadataDescription} />
    <meta
      name="keywords"
      content="Y2NES, Music, Links, Social, Media, Social Media"
    />
    <meta name="author" content="Y2NES" />

    <meta property="og:site_name" content="Y2NES" />
    <meta property="og:title" content={metadataTitle} />
    <meta property="og:description" content={metadataDescription} />
    <meta property="og:url" content="https://y2nes.com/links" />
    <meta property="og:image" content={`https://y2nes.com${bannerImage}`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content={metadataTitle} />
    <meta name="twitter:description" content={metadataDescription} />
    <meta name="twitter:image" content={`https://y2nes.com${bannerImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@wivyrn" />
  </article>
);

const Links = () => {
  return (
    <div className="page">
      {metadata}

      <Header />

      <main>
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

export default Links;
