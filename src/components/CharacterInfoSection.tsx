import getCharacterInfo from '../hooks/getCharacterInfo'
import RichParagraph from './RichParagraph'

type Props = {
    characterId: number
}

const CharacterInfoSection = ({characterId}: Props) => {
    const characterInfo = getCharacterInfo(characterId)
    const characterSection = characterInfo ? <section id="character-info-section" className="scroll-reveal">
        <div id="character-info-wrapper">
            <h2>{characterInfo.name}</h2>
            <RichParagraph text={characterInfo.description} />
        </div>
    </section> : ''
    return characterSection;
}

export default CharacterInfoSection