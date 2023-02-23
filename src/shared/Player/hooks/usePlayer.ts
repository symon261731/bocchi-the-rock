import { useContext, useState } from "react";
import { PlayerContext } from "../PlayerContext";



export const usePlayer = () => {
    const {currentSong,isPlaying, setIsPlaying, setCurrentSong} = useContext(PlayerContext);
 
    const changeTrack = (elem: any) => { 
        setCurrentSong(elem);
        setIsPlaying(false);
    }   

    return { currentSong, changeTrack, isPlaying, setIsPlaying};
}