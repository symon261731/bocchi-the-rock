import { createContext } from "react";

export interface PlayerContextProps {
    currentSong?: any | {};
    setCurrentSong?: (element: any)=> void;
}

export const PlayerContext = createContext<PlayerContextProps>({});