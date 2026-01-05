import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import "./Characters.css";
import CharacterIconButton from "./CharacterIconButton";
import { useState } from "react";
import useCharacterInfos from "../../hooks/useCharacterInfos";
import CharacterInfoSection from "./CharacterInfoSection";
import SiteBackground from "../../components/backgrounds/SiteBackground";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";

const metaData = (
  <Helmet>
    <title>Characters | Y2NES</title>
    <meta
      name="description"
      content="Learn about the characters of the Y2NES universe! Click on their portraits to learn more about each character's background and personality."
    />
    <meta
      name="keywords"
      content="Y2NES, Characters, OCs, Reference, Character"
    />
    <meta name="author" content="Y2NES" />

    <meta property="og:title" content="Characters | Y2NES" />
    <meta
      property="og:description"
      content="Learn about the characters of the Y2NES universe! Click on their portraits to learn more about each character's background and personality."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://y2nes.com/characters" />
  </Helmet>
);

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
      {metaData}
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
