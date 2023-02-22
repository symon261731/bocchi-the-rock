import { createContext } from "react";

export interface PlayerContextProps {
    currentSong?: string;
    setSong?: ()=> void;
}


export const PlayerContext = createContext<>({});