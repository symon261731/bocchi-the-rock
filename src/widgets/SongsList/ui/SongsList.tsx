/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { deezerApi } from 'api/deezer';
import React, {
  Dispatch, FC, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { usePlayer } from 'shared/Player/hooks/usePlayer';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './SongList.module.scss';
import { useGetSongsList } from '../hooks/useGetSongsList';

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

  const { isLoading, error } = useGetSongsList({ setSongs });

  const { currentSong, changeTrack } = usePlayer();

  if (isLoading) {
    return (
      <div className={styles.centerLoader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [classNameValue])}>
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
