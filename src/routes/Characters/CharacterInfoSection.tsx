import { useLayoutEffect, useRef, useState } from "react";
import useCharacterInfo from "../../hooks/useCharacterInfo";
import RichParagraph from "../../components/RichParagraph";

type Props = {
  characterId: number;
};

const CharacterInfoSection = ({ characterId }: Props) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const characterInfo = useCharacterInfo(characterId);

  useLayoutEffect(() => {
    if (!contentRef.current) {
      return;
    }

    setHeight(characterInfo ? contentRef.current.scrollHeight : 0);
  }, [characterInfo]);

  const referenceImage = (
    <>
      {characterInfo?.name === "Alisa" && (
        <img
          className="reference-sheet"
          src="https://image-cdn.unvale.io/insecure/s:1080::/quality:99/plain/https://prod-document-cdn.unvale.io/characters/9142c7e4-fcb1-4d27-b341-f0b7f8094fca/da0ac781-7eb9-4471-a5bb-601a0218243e.webp@webp"
          alt="Alisa reference sheet"
          style={{ height: "500px", width: "auto" }}
        />
      )}
      {characterInfo?.name === "Berry" && (
        <img
          className="reference-sheet"
          src="https://image-cdn.unvale.io/insecure/s:1080::/quality:99/plain/https://prod-document-cdn.unvale.io/characters/05a7a34b-9272-4c06-8074-79fec2978f29/d24c3a7a-fbbe-4a19-8bcb-23e34b74eda9.webp@webp"
          alt="Berry reference sheet"
          style={{ height: "500px", width: "auto" }}
        />
      )}
    </>
  );

  const backgroundColor = characterInfo
    ? characterInfo.backgroundColor
    : "transparent";
  const glow = `0 0 10px ${backgroundColor}, 0 0 60px ${backgroundColor}`;
  return (
    <section id="character-info-section" style={{ height: height }}>
      <div id="character-info-wrapper" ref={contentRef}>
        {characterInfo && (
          <>
            <img
              className="character-info-portrait"
              src={characterInfo.portrait}
              alt={`Portrait of ${characterInfo.name}`}
              style={{ boxShadow: glow }}
            />
            <h2 style={{ textShadow: glow }}>{characterInfo.name}</h2>
            <RichParagraph text={characterInfo.description} />
            {referenceImage}
          </>
        )}
      </div>
    </section>
  );
};

export default CharacterInfoSection;
