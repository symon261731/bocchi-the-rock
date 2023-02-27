import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import coverImage from 'shared/assets/cover.jpg';
import { Player } from 'widgets/Player/ui/Player';
import { usePlayer } from 'shared/Player/hooks/usePlayer';
import { DataValue } from 'widgets/SongsList/ui/SongsList';
import styles from './Card.module.scss';

interface CardProps {
    classNameValue?: string,
    songs?: Array<DataValue>
}

export const Card : React.FC<CardProps> = (props) => {
  const { classNameValue, songs } = props;
  const { currentSong } = usePlayer();

  return (
    <div className={classNames(styles.Card, {}, [classNameValue])}>
      <div className={styles.CardContent}>
        <div className={styles.CardPicture}>
          <img src={coverImage} alt="logo" className={styles.CardImage} />
        </div>
        <p className={styles.CardSongName}>{ currentSong.title }</p>
        <Player songs={songs} />
      </div>
    </div>
  );
};
