import Footer from "../../../components/Footer";
import Header from "../../../components/header/Header";
import './Characters.css'
import CharacterIconButton from "../../../components/CharacterIconButton";
import { useState } from 'react';
import charactersInfo from '../../testing/charactersInfo.json'
import RichParagraph from "../../../components/RichParagraph";

const Characters = () => {
    const [characterId, setCharacterId] = useState(-1);

    const onCharacterPortraitClicked = (cId: number) => {
        if (characterId === cId) {
            setCharacterId(-1)
        }
        else {
            setCharacterId(cId);
        }
    }

    const characterPortraits = charactersInfo.map((characterInfo) => {
        return <CharacterIconButton characterId={characterInfo.id} onClick={() => onCharacterPortraitClicked(characterInfo.id)} />
    })

    const characterInfo = charactersInfo[characterId]
    const characterSection = characterInfo ? <section id="character-info-section">
        <h2>{characterInfo.name}</h2>
        <RichParagraph text={characterInfo.description} />
    </section> : ''

    return <div className="page">
        <Header />
        <main>
            <h1>MEET THE CHARACTERS</h1>
            <div id="character-icons">
                {characterPortraits}
            </div>
            {characterSection}
        </main>
        <Footer />
    </div>
}

export default Characters