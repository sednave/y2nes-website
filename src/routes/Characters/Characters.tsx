import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import "./Characters.css";
import CharacterIconButton from "./CharacterIconButton";
import { useState } from "react";
import useCharacterInfos from "../../hooks/useCharacterInfos";
import CharacterInfoSection from "./CharacterInfoSection";
import SiteBackground from "../../components/backgrounds/SiteBackground";
import Marquee from "react-fast-marquee";

const Characters = () => {
  const [characterId, setCharacterId] = useState(-1);

  const onCharacterPortraitClicked = (cId: number) => {
    if (characterId === cId) {
      setCharacterId(-1);
    } else {
      setCharacterId(cId);
    }
  };

  const characterPortraits = useCharacterInfos().map((characterInfo) => {
    const isSelected = characterInfo.id === characterId;
    return (
      <CharacterIconButton
        isSelected={isSelected}
        key={characterInfo.id}
        characterId={characterInfo.id}
        onClick={() => onCharacterPortraitClicked(characterInfo.id)}
      />
    );
  });

  return (
    <div className="page">
      <SiteBackground />
      <Header />
      <Marquee
        autoFill={true}
        className="marquee"
        gradient={true}
        gradientColor="black"
        direction="right"
        speed={50}
      >
        <p>SAY HELLO</p>
        <p>·</p>
      </Marquee>

      <main id="characters">
        <h1>MEET THE CHARACTERS</h1>
        <div id="character-icons">{characterPortraits}</div>
        <CharacterInfoSection characterId={characterId} />
      </main>

      <Marquee
        autoFill={true}
        className="marquee"
        gradient={true}
        gradientColor="black"
        direction="left"
        speed={50}
      >
        <p>SAY HELLO</p>
        <p>·</p>
      </Marquee>
      <Footer />
    </div>
  );
};

export default Characters;
