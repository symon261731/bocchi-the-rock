import { createContext } from "react";

export interface PlayerContextProps {
    currentSong?: string;
    changeSong?: (el:any)=> void;
}


export const PlayerContext = createContext<PlayerContextProps>({});