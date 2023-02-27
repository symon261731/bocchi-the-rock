/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { deezerApi } from 'api/deezer';
import React, {
  Dispatch, FC, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { usePlayer } from 'shared/Player/hooks/usePlayer';
import styles from './SongList.module.scss';

interface SongsListProps {
    classNameValue?: string;
    songs?: Array<any>;
    setSongs?: Dispatch<React.SetStateAction<any[]>>;
}

export interface DataValue {
    duration: number;
    id: number;
    preview: string;
    title: string;
}

export const SongsList: FC<SongsListProps> = (props) => {
  const { classNameValue, setSongs, songs } = props;

  const [error, setError] = useState('');
  const { currentSong, changeTrack } = usePlayer();

  useEffect(() => {
    deezerApi.getAlbum().then((songsList) => {
      if (songsList.error) {
        setError(songsList.error.message);
      } else {
        setSongs(songsList.tracks.data);
      }
    });
  }, []);

  return (
    <div className={classNames(styles.flex, {}, [classNameValue])}>
      {error ? (
        <p>
          {' '}
          {error}
          {' '}
        </p>
      ) : (
        <ul className={styles.songs}>
          {songs?.map((oneSong : DataValue, index) => (
            <li
              key={index}
              onClick={() => {
                changeTrack(oneSong);
              }}
              className={
                classNames(styles['one-song'], { [styles.chosen]: oneSong.title === currentSong.title }, [])
              }
            >
              {oneSong.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
