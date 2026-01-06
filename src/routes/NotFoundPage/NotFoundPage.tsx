import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import "./NotFoundPage.css";
import bannerImage from "/assets/y2nes_banner.png";

const metadata = (
  <article>
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
    <meta property="og:image" content={`https://y2nes.com${bannerImage}`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content="404 Not Found | Y2NES" />
    <meta
      name="twitter:description"
      content="404 page. You shouldn't be here!"
    />
    <meta name="twitter:image" content={`https://y2nes.com${bannerImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@wivyrn" />
  </article>
);

const NotFoundPage = () => {
  return (
    <div className="page">
      {metadata}
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
