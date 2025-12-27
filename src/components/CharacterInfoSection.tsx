import { useEffect, useRef, useState } from 'react'
import useCharacterInfo from '../hooks/useCharacterInfo'
import RichParagraph from './RichParagraph'

type Props = {
    characterId: number
}

const CharacterInfoSection = ({characterId}: Props) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const characterInfo = useCharacterInfo(characterId);

    useEffect(() => {
        console.log(contentRef.current)
        if (!contentRef.current) {
            return;
        }

        setHeight(characterInfo ? contentRef.current.scrollHeight : 0);
    }, [characterInfo])

    const backgroundColor = characterInfo ? characterInfo.backgroundColor : "clear"
    return (
        <section id="character-info-section" style={{height: height, backgroundColor: backgroundColor}}>
            <div id="character-info-wrapper" ref={contentRef}>
                {characterInfo && <img className="character-info-portrait" src={`${characterInfo.portrait}`} />}
                {characterInfo && <h2>{characterInfo.name}</h2>}
                {characterInfo && <RichParagraph text={characterInfo.description} />}
            </div>
        </section>
    )
}

export default CharacterInfoSection