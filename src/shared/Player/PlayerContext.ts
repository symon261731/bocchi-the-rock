import React, { createContext, Dispatch, SetStateAction } from "react";

export interface PlayerContextProps {
    currentSong?: any | {},
    setCurrentSong?: (element: any)=> void,
    isPlaying?: boolean,
    setIsPlaying? : Dispatch<SetStateAction<boolean>>,
}

export const PlayerContext = createContext<PlayerContextProps>({});