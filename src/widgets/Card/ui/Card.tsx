import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import coverImage from 'shared/assets/cover.jpg';
import { Player } from 'widgets/Player/ui/Player';
import { usePlayer } from 'shared/Player/hooks/usePlayer';
import './Card.scss';
import { DataValue } from 'widgets/SongsList/ui/SongsList';

interface CardProps {
    classNameValue?: string,
    songs?: Array<DataValue>
}

export const Card : React.FC<CardProps> = (props) => {
    const {classNameValue, songs} = props;
    const {currentSong} = usePlayer();

    return (
        <div className={classNames('Card', {}, [classNameValue])}>
            <div className="CardContent">
                <div className="CardPicture"> 
                    <img src={coverImage} alt="logo" className="CardImage" />
                </div>
                <p className="CardSongName">{ currentSong.title }</p>
                <Player songs={songs} />
            </div>
        </div>
    )
}