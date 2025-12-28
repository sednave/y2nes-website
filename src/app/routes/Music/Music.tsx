import { useState } from "react"
import Footer from "../../../components/Footer"
import Header from "../../../components/header/Header"
import './Music.css'
import MusicListings from "./MusicListings"
import SiteBackground from "../../../components/backgrounds/SiteBackground"
import Marquee from "react-fast-marquee"

const Music = () => {
    const [songType, setSongType] = useState('');
    const activeBackgroundColor = 'white';
    const inactiveBackgroundColor = 'rgba(0, 0, 0, 0.5)';
    return <div className="page">
        <SiteBackground />
        <Header />
        <Marquee autoFill={true} className="marquee" gradient={true} gradientColor="black" direction="right" speed={50}>
            <p>SOUND OF THE PAST</p>
            <p>·</p>
        </Marquee>
        <main id="music-page">
            <h1>Y-TUNES</h1>
            <div id="song-categories">
                <button type="button" className="song-category-button" 
                    style={{backgroundImage: 'url(https://f4.bcbits.com/img/a2242049588_10.jpg)', backgroundColor: songType === 'albums' ? activeBackgroundColor : inactiveBackgroundColor}}
                    onClick={() => setSongType('albums')}>
                        Albums
                </button>
                <button type="button" className="song-category-button" 
                    style={{backgroundImage: 'url(https://f4.bcbits.com/img/a1426170319_10.jpg)', backgroundColor: songType === 'singles' ? activeBackgroundColor : inactiveBackgroundColor}}
                    onClick={() => setSongType('singles')}>
                        Singles
                </button>
                <button type="button" className="song-category-button" 
                    style={{backgroundImage: 'url(https://f4.bcbits.com/img/a3864170917_16.jpg)', backgroundColor: songType === 'extras' ? activeBackgroundColor : inactiveBackgroundColor}}
                    onClick={() => setSongType('extras')}>
                        Extras
                </button>
            </div>
            <MusicListings listingType={songType} />
        </main>
        <Marquee autoFill={true} className="marquee" gradient={true} gradientColor="black" direction="left" speed={50}>
            <p>MUSIC OF THE FUTURE</p>
            <p>·</p>
        </Marquee>
        <Footer />
    </div>
}

export default Music;