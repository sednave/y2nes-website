import { useEffect, useRef, useState } from "react";
import MusicListing from "./MusicListing";
import MusicListingButton from "./MusicListingButton";

type Props = {
  listingType: string;
};

const albums = ["Break! The Scarlet Devil!", "ANTI-CULTURED"];
const singles = [
  "STARDUSTER",
  "FREEFALL",
  "STARLIGHT EYES",
  "MAX POWER (feat. Space Bwoi)",
  "AIN'T MOVING",
  "CONTINUE THE BROADCAST",
  "KNOW I'M A KING",
  "LET IT BUBBLE UP",
];
const extras = ["Test Track 1"];

const MusicListings = ({ listingType }: Props) => {
  const [listingId, setListingId] = useState("");
  const [row, setRow] = useState(0);

  const [gridColumns, setGridColumns] = useState(4);
  const gridRef = useRef<HTMLElement>(null);
  const handleMusicListingButtonClick = (listingId: string, index: number) => {
    setListingId(listingId);
    setRow(Math.floor(index / gridColumns) + 2);
  };

  useEffect(() => {
    setListingId("");
    setRow(0);

    const updateGridColumns = () => {
      if (gridRef.current) {
        const cols = getComputedStyle(
          gridRef.current,
        ).gridTemplateColumns.split(" ").length;
        setGridColumns(cols);
      }
    };

    updateGridColumns();
    window.addEventListener("resize", updateGridColumns);
    return () => window.removeEventListener("resize", updateGridColumns);
  }, [listingType]);

  let musicListings = <></>;
  switch (listingType) {
    case "albums":
      musicListings = (
        <section className="music-listings" ref={gridRef}>
          {[...albums].reverse().map((value, index) => (
            <MusicListingButton
              key={value}
              listingId={value}
              selectedId={listingId}
              onClick={(listingId) =>
                handleMusicListingButtonClick(listingId, index)
              }
            />
          ))}
          {listingId && (
            <MusicListing listingId={listingId} style={{ gridRow: row }} />
          )}
        </section>
      );
      break;
    case "singles":
      musicListings = (
        <section className="music-listings" ref={gridRef}>
          {[...singles].reverse().map((value, index) => (
            <MusicListingButton
              key={value}
              listingId={value}
              selectedId={listingId}
              onClick={(listingId) =>
                handleMusicListingButtonClick(listingId, index)
              }
            />
          ))}
          {listingId && (
            <MusicListing listingId={listingId} style={{ gridRow: row }} />
          )}
        </section>
      );
      break;
    case "extras":
      musicListings = (
        <section className="music-listings" ref={gridRef}>
          {[...extras].reverse().map((value, index) => (
            <MusicListingButton
              key={value}
              listingId={value}
              selectedId={listingId}
              onClick={(listingId) =>
                handleMusicListingButtonClick(listingId, index)
              }
            />
          ))}
          {listingId && (
            <MusicListing listingId={listingId} style={{ gridRow: row }} />
          )}
        </section>
      );
      break;
  }
  return musicListings;
};

export default MusicListings;
