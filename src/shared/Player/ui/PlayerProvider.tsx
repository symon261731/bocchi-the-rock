import React, {FC, ReactNode, useMemo, useState} from 'react';
import { PlayerContext } from '../PlayerContext';
interface PlayerProviderProps {
    children: ReactNode;

}

export const PlayerProvider: FC<PlayerProviderProps> = ({children}) => {
    const [currentSong, setCurrentSong]= useState({});
    const defaultValue = useMemo(()=>({
        currentSong,
        setCurrentSong
    }),[currentSong])
    return (
        <PlayerContext.Provider value={defaultValue}>
            {children}
        </PlayerContext.Provider>

    )
}