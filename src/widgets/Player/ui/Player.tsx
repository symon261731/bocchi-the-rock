import React, { FC, useEffect } from 'react';
import Play from '../../../shared/assets/svg/play.svg';
import Pause from '../../../shared/assets/svg/pause.svg';
import Next from '../../../shared/assets/svg/next.svg';
import Previous from '../../../shared/assets/svg/back.svg';
import './Player.scss'
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import useSound from 'use-sound';

interface PlayerProps {
    classnameValues?: string,
    playing: boolean,
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    currentMp: string,
}

export const Player: FC<PlayerProps> = (props) => {
    const {playing, setPlaying, currentMp} = props;

    const [play, {stop} ] = useSound(currentMp)

    const runMusic = () => {
        if( playing === true){
            stop();
            setPlaying(prev => !!prev ? false : true)
        } else{
            play();
            setPlaying(prev => !!prev ? false : true)
        }
        
    }
    
    return (
        <div className={classNames('player', {}, [])}>
            <button className='clear'>
                <Previous/>
            </button>
            <button
             onClick={()=> runMusic() }
             className='clear'>
                {playing ? <Pause/> : <Play/>} 
            </button>
            <button className='clear'>
                <Next/>
            </button>
        </div>
    )
}