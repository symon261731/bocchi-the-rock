import { useContext, useState } from "react";
import { PlayerContext } from "../PlayerContext";



export const usePlayer = () => {
    const {currentSong, setCurrentSong} = useContext(PlayerContext);
 
    const changeTrack = (elem: any) => { 
        setCurrentSong(elem);
        // let audio = new Audio(elem.preview);
        // audio.play();
    }   

    return { currentSong, changeTrack};
}