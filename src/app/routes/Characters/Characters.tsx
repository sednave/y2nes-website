import Footer from "../../../components/Footer";
import Header from "../../../components/header/Header";
import './Characters.css'
import CharacterIconButton from "../../../components/CharacterIconButton";
import { useState } from 'react';
import charactersInfo from '../../testing/charactersInfo.json'
import CharacterInfoSection from "../../../components/CharacterInfoSection";

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
        return <CharacterIconButton key={characterInfo.id} characterId={characterInfo.id} onClick={() => onCharacterPortraitClicked(characterInfo.id)} />
    })
    
    return <div className="page">
        <Header />
        <main id="characters">
            <h1>MEET THE CHARACTERS</h1>
            <div id="character-icons">
                {characterPortraits}
            </div>
            <CharacterInfoSection characterId={characterId} />
        </main>
        <Footer />
    </div>
}

export default Characters