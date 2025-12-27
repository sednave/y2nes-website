import useCharacterInfo from "../../../hooks/useCharacterInfo"

type Props = {
    characterId: number
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CharacterIconButton = ({ characterId, onClick }: Props) => {
    const characterInfo = useCharacterInfo(characterId)
    if (!characterInfo) {
        return null
    }
    const imgUrl = characterInfo.icon;
    return (
        <button type="button" className="character-icon-button" onClick={onClick}>
            <img src={imgUrl} alt={characterInfo.name} />
        </button>
    )
}

export default CharacterIconButton