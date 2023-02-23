import React, {FC, ReactNode, useState} from 'react';
import { PlayerContext } from '../PlayerContext';
interface PlayerProviderProps {
    children: ReactNode;

}

export const PlayerProvider: FC<PlayerProviderProps> = ({children}) => {
    const [currentSong, setCurrentSong]= useState('-');

    const changeSong = (el: any) => {
        setCurrentSong(el.title);
    }

    return (
        <PlayerContext.Provider value={{currentSong, changeSong}}>
            {children}
        </PlayerContext.Provider>

    )
}