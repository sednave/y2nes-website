import Marquee from "react-fast-marquee";
import SiteBackground from "../../components/backgrounds/SiteBackground";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import MailingListInputField from "../../components/MailingListInputField";
import "./Store.css";
import { Helmet } from "react-helmet-async";

const metaData = (
  <Helmet>
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

    <meta property="og:title" content="Store | Y2NES" />
    <meta
      property="og:description"
      content="Shop for official Y2NES merchandise, products, and artwork!"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://y2nes.com/store" />
  </Helmet>
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
