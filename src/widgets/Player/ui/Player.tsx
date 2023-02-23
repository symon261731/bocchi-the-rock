import React, { FC } from 'react';
import Play from '../../../shared/assets/svg/play.svg';
import Pause from '../../../shared/assets/svg/pause.svg';
import Next from '../../../shared/assets/svg/next.svg';
import Previous from '../../../shared/assets/svg/back.svg';
import './Player.scss'
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';

interface PlayerProps {
    classnameValues?: string,

}

export const Player: FC<PlayerProps> = (props) => {
    const {classnameValues} = props;
    
    return (
        <div className={classNames('player', {}, [])}>
            <button className='clear'>
                <Previous/>
            </button>
            <button
             className='clear'>
                {<Pause/> || <Play/>} 
            </button>
            <button className='clear'>
                <Next/>
            </button>
        </div>
    )
}