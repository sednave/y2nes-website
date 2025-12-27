import { useState } from "react"
import Footer from "../../../components/Footer"
import Header from "../../../components/header/Header"
import './Music.css'
import MusicListings from "./MusicListings"

const Music = () => {
    const [songType, setSongType] = useState('');
    return <div className="page">
        <Header />
        <main id="music-page">
            <h1>Y-TUNES</h1>
            <div id="song-categories">
                <button type="button" className="song-category-button" 
                    style={{backgroundImage: 'url(https://f4.bcbits.com/img/a2242049588_10.jpg)'}}
                    onClick={() => setSongType('albums')}>
                        Albums
                </button>
                <button type="button" className="song-category-button" 
                    style={{backgroundImage: 'url(https://f4.bcbits.com/img/a1426170319_10.jpg)'}}
                    onClick={() => setSongType('singles')}>
                        Singles
                </button>
                <button type="button" className="song-category-button" 
                    style={{backgroundImage: 'url(https://f4.bcbits.com/img/a3864170917_16.jpg)'}}
                    onClick={() => setSongType('extras')}>
                        Extras
                </button>
            </div>
            <MusicListings listingType={songType} />
        </main>
        <Footer />
    </div>
}

export default Music;