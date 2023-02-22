import React, { useState } from 'react';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import coverImage from '../../../shared/assets/cover.jpg';
import { Player } from '../../Player/ui/Player';
import './Card.scss';
interface CardProps {
    classNameValue?: string,
}


export const Card : React.FC<CardProps> = ({classNameValue}) => {
    
    const[ playing, setPlaying ] = useState(false);

    return (
        <div className={classNames('Card', {}, [classNameValue])}>
            <div className="CardContent">
                <div className="CardPicture"> 
                    <img src={coverImage} alt="logo" className="CardImage" />
                </div>
                <p className="CardSongName">123</p>
                <Player />
            </div>
        </div>
    )
}