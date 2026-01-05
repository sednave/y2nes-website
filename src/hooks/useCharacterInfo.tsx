import charactersInfo from "../testing/charactersInfo.json";
import { useMemo } from "react";

const useCharacterInfo = (characterId: number) => {
  return useMemo(
    () =>
      charactersInfo.find((characterInfo) => characterInfo.id === characterId),
    [characterId]
  );
};

export default useCharacterInfo;
