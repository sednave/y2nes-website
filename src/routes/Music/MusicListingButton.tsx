type Props = {
  listingId: string;
  selectedId: string;
  onClick: (listingId: string) => void;
};

const MusicListingButton = ({ listingId, selectedId, onClick }: Props) => {
  const LISTING_IMAGES: Record<string, string> = {
    "ANTI-CULTURED": "https://f4.bcbits.com/img/a2242049588_10.jpg",
    "Break! The Scarlet Devil!": "https://f4.bcbits.com/img/a2922520444_16.jpg",
    STARDUSTER: "https://f4.bcbits.com/img/a1426170319_10.jpg",
    FREEFALL: "https://f4.bcbits.com/img/a4061308070_10.jpg",
    "STARLIGHT EYES": "https://f4.bcbits.com/img/a1010331177_10.jpg",
    "MAX POWER (feat. Space Bwoi)":
      "https://f4.bcbits.com/img/a3747461122_16.jpg",
    "AIN'T MOVING": "https://f4.bcbits.com/img/a4170662530_10.jpg",
    "CONTINUE THE BROADCAST": "https://f4.bcbits.com/img/a2414336345_10.jpg",
    "KNOW I'M A KING": "https://f4.bcbits.com/img/a1218000490_10.jpg",
    "LET IT BUBBLE UP": "https://f4.bcbits.com/img/a4079986900_10.jpg",
    "Test Track 1": "https://y2nes.com/assets/test_track_1.png",
  };

  const backgroundImage = LISTING_IMAGES[listingId];
  const activeBackgroundColor = "white";
  const inactiveBackgroundColor = "rgba(0, 0, 0, 0.5)";
  const backgroundColor =
    selectedId === listingId ? activeBackgroundColor : inactiveBackgroundColor;
  const listingName = listingId;
  return (
    <button
      className="music-item-listing"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundColor: backgroundColor,
      }}
      onClick={() => onClick(listingId)}
      type="button"
    >
      {listingName}
    </button>
  );
};

export default MusicListingButton;
