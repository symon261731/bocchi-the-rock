import React, { FC, useEffect, useMemo, useRef } from 'react';
import Play from '../../../shared/assets/svg/play.svg';
import Pause from '../../../shared/assets/svg/pause.svg';
import Next from '../../../shared/assets/svg/next.svg';
import Previous from '../../../shared/assets/svg/back.svg';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { usePlayer } from '../../../shared/Player/hooks/usePlayer';
import './Player.scss'

interface PlayerProps {
    classnameValues?: string,
    songs?: Array<any>
}

export const Player: FC<PlayerProps> = (props) => {
    const {classnameValues, songs} = props;
    const {currentSong, changeTrack, isPlaying, setIsPlaying} =usePlayer();

    const audioPlayer = useRef<HTMLAudioElement>();
    const indexOfSong = useMemo(()=> {
        return songs.indexOf(currentSong);
    },[currentSong]);

    console.log(currentSong);

    const togglePlayPause = () => {
        if(!isPlaying){
            audioPlayer.current.play();
            setIsPlaying(!isPlaying);
        } else{
            audioPlayer.current.pause();
            setIsPlaying(!isPlaying)
        }
    };
    
    const playPreviousTrack = () => {
        changeTrack(songs[indexOfSong-1]);
    };
    const playNextTrack = () => {
        changeTrack(songs[indexOfSong+1]);
    };

    useEffect(()=>{
            if(Object.keys(currentSong).length){
               audioPlayer.current.play();
               setIsPlaying(true);
            }
    },[currentSong]);

    return (
        <div className={classNames('player', {}, [classnameValues])}>
            <audio ref={audioPlayer} src={currentSong.preview}/>
            <button className='clear' onClick={playPreviousTrack}>
                <Previous/>
            </button>
            <button
             onClick={togglePlayPause}
             className='clear'>
                {isPlaying ?  <Pause/> : <Play/> } 
            </button>
            <button onClick={playNextTrack} className='clear'>
                <Next/>
            </button>
        </div>
    )
}