import React from 'react';
import { useContext } from 'react';
import { PlayerContext } from '../PlayerContext';

interface UsePlayerResult {
    currentSong: string;
    changeSong: ()=> void;
}

export const usePlayer = (): UsePlayerResult => {
    const {} = useContext(PlayerContext);
}