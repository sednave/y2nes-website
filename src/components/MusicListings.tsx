import { useEffect, useState } from "react"
import MusicListing from "./MusicListing"
import MusicListingButton from "../app/routes/Music/MusicListingButton"

type Props = {
    listingType: string
}

const MusicListings = ({listingType}: Props) => {
    const [listingId, setListingId] = useState('');
    const [row, setRow] = useState(0);
    const GRID_COLUMNS = 5;

    const handleMusicListingButtonClick = (listingId: string, index: number) => {
        setListingId(listingId)
        setRow(Math.floor(index / GRID_COLUMNS) + 2);
    }

    useEffect(() => {
        setListingId('')
        setRow(0);
    }, [listingType])

    let musicListings = <></>
    switch (listingType) {
        case 'albums':
            musicListings = <section className="music-listings">
                <div className="music-listings-wrapper">
                    <MusicListingButton listingId='ANTI-CULTURED' onClick={(listingId) => handleMusicListingButtonClick(listingId, 0)}/>
                    <MusicListingButton listingId='Break! The Scarlet Devil!' onClick={(listingId) => handleMusicListingButtonClick(listingId, 1)}/>
                    {listingId && <MusicListing listingId={listingId} style={{gridRow: row}}/>}
                </div>
            </section>
            break;
        case 'singles':
            musicListings = <section className="music-listings">
                <div className="music-listings-wrapper">
                    <MusicListingButton listingId='STARDUSTER' onClick={(listingId) => handleMusicListingButtonClick(listingId, 0)}/>
                    <MusicListingButton listingId='FREEFALL' onClick={(listingId) => handleMusicListingButtonClick(listingId, 1)}/>
                    <MusicListingButton listingId='MAX POWER (feat. Space Bwoi)' onClick={(listingId) => handleMusicListingButtonClick(listingId, 2)}/>
                    <MusicListingButton listingId="AIN'T MOVING" onClick={(listingId) => handleMusicListingButtonClick(listingId, 3)}/>
                    <MusicListingButton listingId="CONTINUE THE BROADCAST" onClick={(listingId) => handleMusicListingButtonClick(listingId, 4)}/>
                    <MusicListingButton listingId="KNOW I'M A KING" onClick={(listingId) => handleMusicListingButtonClick(listingId, 5)}/>
                    <MusicListingButton listingId="LET IT BUBBLE UP" onClick={(listingId) => handleMusicListingButtonClick(listingId, 6)}/>
                    {listingId && <MusicListing listingId={listingId} style={{gridRow: row}}/>}
                </div>
            </section>
            break;
        case 'extras':
            musicListings = <section className="music-listings">
                <div className="music-listings-wrapper">
                    <MusicListingButton listingId='Test Track 1' onClick={(listingId) => handleMusicListingButtonClick(listingId, 0)}/>
                    {listingId && <MusicListing listingId={listingId} style={{gridRow: row}}/>}
                </div>
            </section>
            break;
    }
    return musicListings;
}

export default MusicListings;