import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import "./NotFoundPage.css";

const metaData = (
  <head>
    <title>404 Not Found | Y2NES</title>
    <meta name="description" content="404 page. You shouldn't be here!" />
    <meta name="keywords" content="Y2NES" />
    <meta name="author" content="Y2NES" />

    <meta property="og:site_name" content="Y2NES" />
    <meta property="og:title" content="404 Not Found | Y2NES" />
    <meta
      property="og:description"
      content="404 page. You shouldn't be here!"
    />
    <meta
      property="og:image"
      content="https://y2nes.com/assets/y2nes_banner-nN86aZgg.png"
    />
    <meta property="og:type" content="website" />

    <meta property="twitter:title" content="404 Not Found | Y2NES" />
    <meta
      property="twitter:description"
      content="404 page. You shouldn't be here!"
    />
    <meta
      property="twitter:image"
      content="https://y2nes.com/assets/y2nes_banner-nN86aZgg.png"
    />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@wivyrn" />
  </head>
);

const NotFoundPage = () => {
  return (
    <div className="page">
      {metaData}
      <Header />
      <main id="not-found-page">
        <section id="not-found-page-wrapper">
          <h1>Error 404: Not found</h1>
          <p>You're trying to go somewhere that doesn't exist.</p>
          <p>I like the hustle, but tone it down on my website, okay?</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
