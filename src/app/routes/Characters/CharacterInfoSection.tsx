import { useLayoutEffect, useRef, useState } from 'react'
import useCharacterInfo from '../../../hooks/useCharacterInfo'
import RichParagraph from '../../../components/RichParagraph'

type Props = {
    characterId: number
}

const CharacterInfoSection = ({characterId}: Props) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const characterInfo = useCharacterInfo(characterId);

    useLayoutEffect(() => {
        if (!contentRef.current) {
            return;
        }

        setHeight(characterInfo ? contentRef.current.scrollHeight : 0);
    }, [characterInfo])

    const referenceImage = <>
        {characterInfo?.name === 'Alisa' && <img className='reference-sheet' src='https://image-cdn.unvale.io/insecure/s:1080::/quality:99/plain/https://prod-document-cdn.unvale.io/characters/9142c7e4-fcb1-4d27-b341-f0b7f8094fca/da0ac781-7eb9-4471-a5bb-601a0218243e.webp@webp' alt='Alisa reference sheet'/>}
    </>

    const backgroundColor = characterInfo ? characterInfo.backgroundColor : "transparent"
    return (
        <section id="character-info-section" style={{height: height, backgroundColor: backgroundColor}}>
            <div id="character-info-wrapper" ref={contentRef}>
                {characterInfo && (
                    <>
                        <img className="character-info-portrait" src={characterInfo.portrait} alt={`Portrait of ${characterInfo.name}`} />
                        <h2>{characterInfo.name}</h2>
                        <RichParagraph text={characterInfo.description} />
                        {referenceImage}
                    </>
                )}
            </div>
        </section>
    )
}

export default CharacterInfoSection