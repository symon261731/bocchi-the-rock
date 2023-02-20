import React, { useState } from 'react';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import coverImage from '../../../shared/assets/cover.jpg';
import { Player } from '../../Player/ui/Player';
import './Card.scss';
interface CardProps {
    classNameValue?: string,
    currentName: string,
    currentMp: string,
}


export const Card : React.FC<CardProps> = ({classNameValue, currentName, currentMp}) => {
    
    const[ playing, setPlaying ] = useState(false);

    return (
        <div className={classNames('Card', {}, [classNameValue])}>
            <div className="CardContent">
                <div className="CardPicture"> 
                    <img src={coverImage} alt="logo" className="CardImage" />
                </div>
                <p className="CardSongName">{currentName}</p>
                <Player currentMp={currentMp} setPlaying={setPlaying} playing={playing}/>
            </div>
        </div>
    )
}