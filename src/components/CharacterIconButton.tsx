import charactersInfo from '../app/testing/charactersInfo.json'

type Props = {
    characterId: number
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CharacterIconButton = ({ characterId, onClick }: Props) => {
    const characterInfo = charactersInfo[characterId]
    const imgUrl = characterInfo.icon;
    return (
        <button className="character-icon-button" onClick={onClick}>
            <img src={imgUrl} alt={characterInfo.name} aria-hidden="true" />
        </button>
    )
}

export default CharacterIconButton