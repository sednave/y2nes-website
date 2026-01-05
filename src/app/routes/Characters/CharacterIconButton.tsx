import useCharacterInfo from "../../../hooks/useCharacterInfo"

type Props = {
    characterId: number,
    isSelected: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CharacterIconButton = ({ characterId, isSelected, onClick }: Props) => {
    const characterInfo = useCharacterInfo(characterId)
    if (!characterInfo) {
        return null
    }
    const imgUrl = characterInfo.icon;

    const filter = isSelected ? 'brightness(1)' : 'brightness(0.75)'

    return (
        <button type="button" className="character-icon-button" onClick={onClick} >
            <img src={imgUrl} alt={characterInfo.name} style={{filter: filter}}/>
            <strong>{characterInfo.name}</strong>
        </button>
    )
}

export default CharacterIconButton