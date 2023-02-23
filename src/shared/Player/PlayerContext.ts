import React, { createContext, Dispatch, SetStateAction } from "react";
import { DataValue } from "../../widgets/SongsList/ui/SongsList";

export interface PlayerContextProps {
    currentSong?: DataValue | {title:string, preview:string},
    setCurrentSong?: (element: any)=> void,
    isPlaying?: boolean,
    setIsPlaying? : Dispatch<SetStateAction<boolean>>,
}

export const PlayerContext = createContext<PlayerContextProps>({});