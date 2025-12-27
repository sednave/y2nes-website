import charactersInfo from '../app/testing/charactersInfo.json'
import { useMemo } from 'react';

const useCharacterInfo = (characterId: number) => {
    return useMemo(
        () => charactersInfo.find((characterInfo) => characterInfo.id === characterId),
        [characterId, charactersInfo]
    );
}

export default useCharacterInfo;