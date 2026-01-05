import Marquee from "react-fast-marquee";
import SiteBackground from "../../components/backgrounds/SiteBackground";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import MailingListInputField from "../../components/MailingListInputField";
import "./Store.css";

const metaData = (
  <head>
    <title>Store | Y2NES</title>
    <meta
      name="description"
      content="Shop for official Y2NES merchandise, products, and artwork!"
    />
    <meta
      name="keywords"
      content="Y2NES, Shop, Store, Merch, Merchandise, Products"
    />
    <meta name="author" content="Y2NES" />

    <meta property="og:site_name" content="Y2NES" />
    <meta property="og:title" content="Store | Y2NES" />
    <meta
      property="og:description"
      content="Shop for official Y2NES merchandise, products, and artwork!"
    />
    <meta property="og:url" content="https://y2nes.com/store" />
    <meta
      property="og:image"
      content="https://y2nes.com/assets/y2nes_banner-nN86aZgg.png"
    />
    <meta property="og:type" content="website" />

    <meta property="twitter:title" content="Store | Y2NES" />
    <meta
      property="twitter:description"
      content="Shop for official Y2NES merchandise, products, and artwork!"
    />
    <meta
      property="twitter:image"
      content="https://y2nes.com/assets/y2nes_banner-nN86aZgg.png"
    />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@wivyrn" />
  </head>
);

const Store = () => {
  return (
    <div id="store" className="page">
      {metaData}
      <SiteBackground />
      <Header />
      <Marquee
        autoFill={true}
        className="marquee"
        gradient={true}
        gradientColor="black"
        direction="right"
        speed={50}
      >
        <p>YOUTOPIA</p>
        <p>·</p>
      </Marquee>
      <main>
        <section id="store-wrapper">
          <h1>STORE</h1>
          <div id="store-wrapper-main-div">
            <h2>WELCOME TO THE Y2NES MERCH SHOP</h2>
            <p>You will find stickers and other merch here!</p>
            <strong>Coming soon!</strong>
          </div>
          <MailingListInputField />
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
        <p>YOUTOPIA</p>
        <p>·</p>
      </Marquee>
      <Footer />
    </div>
  );
};

export default Store;
