import Footer from "../../components/Footer";
import Header from "../../components/header/Header";

const NotFoundPage = () => {
    return <div id="not-found-page">
        <Header />
        <main>
            <section id="not-found-page-wrapper">
                <h1>Error 404: Not found</h1>
                <p>You're trying to go somewhere that doesn't exist.</p>
                <p>I like the hustle, but tone it down on my website, okay?</p>
            </section>
        </main>
        <Footer />
    </div>
}

export default NotFoundPage