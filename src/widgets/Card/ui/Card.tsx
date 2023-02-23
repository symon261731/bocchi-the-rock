import React from 'react';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import coverImage from '../../../shared/assets/cover.jpg';
import { Player } from '../../Player/ui/Player';
import './Card.scss';
import { usePlayer } from '../../../shared/Player/hooks/usePlayer';
interface CardProps {
    classNameValue?: string,
}


export const Card : React.FC<CardProps> = ({classNameValue}) => {

    const {currentSong, isPlaying} = usePlayer();

    return (
        <div className={classNames('Card', {}, [classNameValue])}>
            <div className="CardContent">
                <div className="CardPicture"> 
                    <img src={coverImage} alt="logo" className="CardImage" />
                </div>
                <p className="CardSongName">{currentSong.title || '-'}</p>
                <Player />
            </div>
        </div>
    )
}