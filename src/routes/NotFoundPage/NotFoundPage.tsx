import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import "./NotFoundPage.css";
import { Helmet } from "react-helmet-async";

const metaData = (
  <Helmet>
    <title>404 Not Found | Y2NES</title>
    <meta name="description" content="404 page. You shouldn't be here!" />
    <meta name="keywords" content="Y2NES" />
    <meta name="author" content="Y2NES" />

    <meta property="og:title" content="404 Not Found | Y2NES" />
    <meta
      property="og:description"
      content="404 page. You shouldn't be here!"
    />
    <meta property="og:type" content="website" />
  </Helmet>
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
