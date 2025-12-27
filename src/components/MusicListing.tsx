import { useLayoutEffect, useRef, useState } from "react";

type Props = {
    listingId: string,
    style: React.CSSProperties
}

const MusicListing = ({listingId, style}: Props) => {
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }

        setHeight(ref.current.scrollHeight);
    }, [listingId])

    const newStyle = {...style, height}

    let inner = <></>
    switch (listingId) {
        case "ANTI-CULTURED":
            inner = <>
                <h2>ANTI-CULTURED</h2>
                <p>COMING SOON!</p>
            </>
            break;
        case "Break! The Scarlet Devil!":
            inner = <>
                <iframe title="Break! The Scarlet Devil!" className="bandcamp-player" src="https://bandcamp.com/EmbeddedPlayer/album=3392606553/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/album/break-the-scarlet-devil">Break! The Scarlet Devil! by Y2NES</a></iframe>
                <h2>Break! The Scarlet Devil!</h2>
                <p>A remix compilation of Touhou 6.</p>
            </>
            break;
        case "STARDUSTER":
            inner = <>
                <iframe title="STARDUSTER" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/album=3660575711/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/album/starduster">STARDUSTER by Y2NES</a></iframe>
                <h2>STARDUSTER</h2>
                <p>Y2NES's first single, and a funky fresh one at that. This song embodies Y2NES's core theme - taking the sounds of the past and transforming it into the music of the future!</p>
            </>
            break;
        case "FREEFALL":
            inner = <>
                <iframe title="FREEFALL" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/album=2224695440/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/album/freefall">FREEFALL by Y2NES</a></iframe>
                <h2>FREEFALL</h2>
                <p>The floating islands of Mythra make for a wonderful sight when viewed from a distance, but one needs to take care if they find themselves on one of them. One step is two steps to freefall.</p>
            </>
            break;
        case "STARLIGHT EYES":
            inner = <>
                <iframe title="STARLIGHT EYES" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/track=3164590948/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/track/starlight-eyes-2">STARLIGHT EYES by Y2NES</a></iframe>
                <h2>STARLIGHT EYES</h2>
                <p>Those starlight eyes will put you into a trance. When Alisa realized what exactly she was seeing with her demon eyes, she smiled. For the first time ever, she thought she might be able to do anything.</p>
            </>
            break;
        case "MAX POWER (feat. Space Bwoi)":
            inner = <>
                <iframe title="MAX POWER" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/track=3356116089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/track/max-power-feat-space-bwoi">MAX POWER (feat. Space Bwoi) by Y2NES</a></iframe>
                <h2>MAX POWER (feat. Space Bwoi)</h2>
                <p>For once, Mythra's adventurers couldn't take down a threat to their city. What could stop the biggest monster that has ever attacked the city? Berry's pet project, the KNIGHT program, was still in development, but it was still the city's best chance at stopping utter destruction. Berry, Bagel, and Basil each suit up and get in their mechs. It's about to be a kaiju showdown.</p>
                <p>Space Bwoi helped produce the initial melody.</p>
            </>
            break;
        case "AIN'T MOVING":
            inner = <>
                <iframe title="AIN'T MOVING" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/track=2069550112/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/track/aint-moving">AIN&#39;T MOVING by Y2NES</a></iframe>
                <h2>AIN'T MOVING</h2>
                <p>The Sea of Clouds is a vast and empty landscape, if it could be called a landscape. Following their test run with the KNIGHT program, Berry, Bagel, and Basil find themselves stuck. No matter how far they walk, it appears that they're making no distance. Still, they would much take the chance and go the distance than wait in hopes that someone might rescue them.</p>
            </>
            break;
        case "CONTINUE THE BROADCAST":
            inner = <>
                <iframe title="CONTINUE THE BROADCAST" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/track=3257326075/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/track/continue-the-broadcast">CONTINUE THE BROADCAST by Y2NES</a></iframe>
                <h2>CONTINUE THE BROADCAST</h2>
                <p>Berry, Bagel, and Basil have become celebrities after becoming the number 1 adventurers. They're constantly bombarded with commercial offers that they never all agree to. However, this time, it seems they've all agreed to do a photoshoot for a local speakeasy. Strange, considering their age. But then again, it might be their best shot at landing some of that famous adventurer alcohol that Basil has always fantasized about.</p>
            </>
            break;
        case "KNOW I'M A KING":
            inner = <>
                <iframe title="KNOW I'M A KING" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/track=2100894274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/track/know-im-a-king">KNOW I&#39;M A KING by Y2NES</a></iframe>
                <h2>KNOW I'M A KING</h2>
                <p>Unlike the days of old, where one king ruled all, the youths of today are all kings of their own right. Those on top continue to put others down to lift themselves up. But we won't let that happen.</p>
                <br />
                <p>Y2NES is sending them a message. Know I'm a king.</p>
            </>
            break;
        case "LET IT BUBBLE UP":
            inner = <>
                <iframe title="LET IT BUBBLE UP" className='bandcamp-player' src="https://bandcamp.com/EmbeddedPlayer/album=392278578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://y2nes.bandcamp.com/album/let-it-bubble-up">LET IT BUBBLE UP by Y2NES</a></iframe>
                <h2>LET IT BUBBLE UP</h2>
                <p>The world's getting more chaotic and trust in your fellow man is at an all time low. Something has to change, but it won't happen until something bubbles over. Sometimes if you want life to change, you have to let it bubble up.</p>
            </>
            break;
        case "Test Track 1":
            inner = <>
                <iframe title="Test Track 1" width="1230" height="692" src="https://www.youtube.com/embed/uQP803hSnO4" title="literally my first song ever" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h2>Test Track 1</h2>
                <p>This is the first song I ever made. I think it didn't turn out that bad! Especially when compared with my second song, which isn't even ironically bad, it's just plain bad and will never see the light of day.</p>
            </>
            break;
    }
    return <div className='music-listing' style={newStyle} >
        <div ref={ref}>
            {inner}
        </div>
    </div>
}

export default MusicListing;