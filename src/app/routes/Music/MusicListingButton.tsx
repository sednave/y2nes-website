import TestTrack1Image from '../../../assets/test_track_1.png'

type Props = {
    listingId: string,
    onClick: (listingId: string) => void
}

const MusicListingButton = ({listingId, onClick}:Props) => {
    let backgroundImage = '';
    switch (listingId) {
        case 'ANTI-CULTURED':
            backgroundImage = 'https://f4.bcbits.com/img/a2242049588_10.jpg';
            break;
        case 'Break! The Scarlet Devil!':
            backgroundImage = 'https://f4.bcbits.com/img/a2922520444_16.jpg';
            break;
        case 'STARDUSTER':
            backgroundImage = 'https://f4.bcbits.com/img/a1426170319_10.jpg';
            break;
        case 'FREEFALL':
            backgroundImage = 'https://f4.bcbits.com/img/a4061308070_10.jpg';
            break;
        case 'STARLIGHT EYES':
            backgroundImage = 'https://f4.bcbits.com/img/a1010331177_10.jpg';
            break;
        case 'MAX POWER (feat. Space Bwoi)':
            backgroundImage = 'https://f4.bcbits.com/img/a3747461122_10.jpg';
            break;
        case "AIN'T MOVING":
            backgroundImage = 'https://f4.bcbits.com/img/a4170662530_10.jpg';
            break;
        case 'CONTINUE THE BROADCAST':
            backgroundImage = 'https://f4.bcbits.com/img/a2414336345_10.jpg';
            break;
        case "KNOW I'M A KING":
            backgroundImage = 'https://f4.bcbits.com/img/a1218000490_10.jpg';
            break;
        case 'LET IT BUBBLE UP':
            backgroundImage = 'https://f4.bcbits.com/img/a4079986900_10.jpg';
            break;
        case 'Test Track 1':
            backgroundImage = TestTrack1Image;
            break;
    }
    const listingName = listingId;
    return <button 
        className='music-item-listing' 
        style={{backgroundImage: `url('${backgroundImage}')`}}
        onClick={() => onClick(listingId)}
    >
        {listingName}
    </button>
}

export default MusicListingButton;