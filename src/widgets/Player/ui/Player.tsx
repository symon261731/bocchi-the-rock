import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import Play from '../../../shared/assets/svg/play.svg';
import Pause from '../../../shared/assets/svg/pause.svg';
import Next from '../../../shared/assets/svg/next.svg';
import Previous from '../../../shared/assets/svg/back.svg';
import './Player.scss'
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { usePlayer } from '../../../shared/Player/hooks/usePlayer';
import { PlayerContext } from '../../../shared/Player/PlayerContext';

interface PlayerProps {
    classnameValues?: string,

}

export const Player: FC<PlayerProps> = (props) => {
    const {classnameValues} = props;

    // const {currentSong, isPlaying, setIsPlaying} = useContext(PlayerContext);
    const {currentSong, isPlaying, setIsPlaying} =usePlayer();

    // const [duration, setDuration] = useState(0);

    const audioPlayer = useRef<HTMLAudioElement>();


    const togglePlayPause = () => {
        if(!isPlaying){
            audioPlayer.current.play();
            setIsPlaying(!isPlaying)
        } else{
            audioPlayer.current.pause();
            setIsPlaying(!isPlaying)

        }
    }

    return (
        <div className={classNames('player', {}, [])}>
            <audio ref={audioPlayer} src={currentSong.preview}/>
            <button className='clear'>
                <Previous/>
            </button>
            <button
             onClick={togglePlayPause}
             className='clear'>
                {isPlaying ? <Pause/> : <Play/>} 
            </button>
            <button className='clear'>
                <Next/>
            </button>
        </div>
    )
}