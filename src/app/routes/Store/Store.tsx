import Footer from "../../../components/Footer";
import Header from "../../../components/header/Header";
import MailingListInputField from "../../../components/MailingListInputField"
import './Store.css'

const Store = () => {
    return <div id="store">
        <Header />
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
        <Footer />
    </div>
}

export default Store