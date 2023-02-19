import React, { useState } from 'react';
import useSound from '../../../../node_modules/use-sound/dist/index';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import './Card.scss';

interface CardProps {
    classNameValue?: string
}


export const Card : React.FC = ({classNameValue}: CardProps) => {

    

    const [isPlaying, setIsPlaying] = useState(false);
    // const [play, {pause, duration, sound}] = useSound();
    const playHandler = () => {
        if (isPlaying){
            // pause();
            setIsPlaying(false);
        } else{
            // play();
            setIsPlaying(true);
        }
    }

    return (
        <div className={classNames('Card', {}, [classNameValue])}>
            <div className="CardContent">
                <div className="CardPicture"> 
                <img src="#" alt="logo" className="CardImage" />
                </div>
                <p className="CardSongName">bocchi the rock</p>
                <button onClick={playHandler}>play</button>
            </div>
        </div>
    )
}