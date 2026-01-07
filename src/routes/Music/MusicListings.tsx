import { useEffect, useState } from "react";
import MusicListing from "./MusicListing";
import MusicListingButton from "./MusicListingButton";

type Props = {
  listingType: string;
};

const MusicListings = ({ listingType }: Props) => {
  const [listingId, setListingId] = useState("");
  const [row, setRow] = useState(0);

  const grid = document.querySelector(".music-listings");
  const gridColumns = grid
    ? getComputedStyle(grid).gridTemplateColumns.split(" ").length
    : 4;

  const handleMusicListingButtonClick = (listingId: string, index: number) => {
    setListingId(listingId);
    setRow(Math.floor(index / gridColumns) + 2);
  };

  useEffect(() => {
    setListingId("");
    setRow(0);
  }, [listingType]);

  let musicListings = <></>;
  switch (listingType) {
    case "albums":
      musicListings = (
        <section className="music-listings">
          <MusicListingButton
            listingId="ANTI-CULTURED"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 0)}
          />
          <MusicListingButton
            listingId="Break! The Scarlet Devil!"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 1)}
          />
          {listingId && (
            <MusicListing listingId={listingId} style={{ gridRow: row }} />
          )}
        </section>
      );
      break;
    case "singles":
      musicListings = (
        <section className="music-listings">
          <MusicListingButton
            listingId="LET IT BUBBLE UP"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 7)}
          />
          <MusicListingButton
            listingId="KNOW I'M A KING"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 6)}
          />
          <MusicListingButton
            listingId="CONTINUE THE BROADCAST"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 5)}
          />
          <MusicListingButton
            listingId="AIN'T MOVING"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 4)}
          />
          <MusicListingButton
            listingId="MAX POWER (feat. Space Bwoi)"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 3)}
          />
          <MusicListingButton
            listingId="STARLIGHT EYES"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 2)}
          />
          <MusicListingButton
            listingId="FREEFALL"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 1)}
          />
          <MusicListingButton
            listingId="STARDUSTER"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 0)}
          />
          {listingId && (
            <MusicListing listingId={listingId} style={{ gridRow: row }} />
          )}
        </section>
      );
      break;
    case "extras":
      musicListings = (
        <section className="music-listings">
          <MusicListingButton
            listingId="Test Track 1"
            selectedId={listingId}
            onClick={(listingId) => handleMusicListingButtonClick(listingId, 0)}
          />
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
