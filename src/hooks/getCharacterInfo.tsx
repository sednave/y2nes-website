import charactersInfo from '../app/testing/charactersInfo.json'
import { useMemo } from 'react';

const getCharacterInfo = (characterId: number) => {
    return useMemo(
        () => charactersInfo.find((characterInfo) => characterInfo.id === characterId),
        [characterId, charactersInfo]
    );
}

export default getCharacterInfo;