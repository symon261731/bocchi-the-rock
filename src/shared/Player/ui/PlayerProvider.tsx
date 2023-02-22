import React, {FC, ReactNode, useState} from 'react';

interface PlayerProps {
    children: ReactNode;

}

export const PlayerProvider: FC<PlayerProps> = ({children}) => {

    return (
        <PlayerContext.Provider value={}>
            {children}
        <PlayerProvider.Provider/>

    )
}