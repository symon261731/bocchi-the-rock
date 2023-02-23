import { useContext, useState } from "react";
import { PlayerContext } from "../PlayerContext";



export const usePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const {currentSong, setCurrentSong} = useContext(PlayerContext);
    // let audio : HTMLAudioElement;
    
    const changeTrack = (elem: any) => {
        // if(audio){
            // audio.pause();
        // }
        setCurrentSong(elem);
        let audio = new Audio(elem.preview);
        
        if( isPlaying === true){
            audio.pause();
            setIsPlaying(false);
            audio.play();
        } else{

            setIsPlaying(true);
            audio.play();
        }
    };

    return {isPlaying, currentSong, changeTrack};
}