/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  FC, useEffect, useMemo, useRef,
} from 'react';
import Play from 'shared/assets/svg/play.svg';
import Pause from 'shared/assets/svg/pause.svg';
import Next from 'shared/assets/svg/next.svg';
import Previous from 'shared/assets/svg/back.svg';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { usePlayer } from 'shared/Player/hooks/usePlayer';
import styles from './Player.module.scss';

interface PlayerProps {
    classnameValues?: string,
    songs?: Array<any>
}

export const Player: FC<PlayerProps> = (props) => {
  const { classnameValues, songs } = props;
  const {
    currentSong, changeTrack, isPlaying, setIsPlaying,
  } = usePlayer();

  const audioPlayer = useRef<HTMLAudioElement>();
  const indexOfSong = useMemo(() => songs.indexOf(currentSong), [currentSong]);

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioPlayer.current.pause();
      setIsPlaying(!isPlaying);
    }
  };

  const playPreviousTrack = () => {
    if (indexOfSong === 0) {
      changeTrack(songs[songs.length - 1]);
    } else {
      changeTrack(songs[indexOfSong - 1]);
    }
  };

  const playNextTrack = () => {
    if (indexOfSong === songs.length - 1) {
      changeTrack(songs[0]);
    } else {
      changeTrack(songs[indexOfSong + 1]);
    }
  };

  useEffect(() => {
    if (Object.keys(currentSong).length) {
      audioPlayer.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  return (
    <div className={classNames(styles.player, {}, [classnameValues])}>
      <audio ref={audioPlayer} src={currentSong.preview} />
      <button type="button" className={styles.clear} onClick={playPreviousTrack}>
        <Previous />
      </button>
      <button
        onClick={togglePlayPause}
        className={styles.clear}
        type="button"
      >
        {isPlaying ? <Pause /> : <Play /> }
      </button>
      <button onClick={playNextTrack} className={styles.clear} type="button">
        <Next />
      </button>
    </div>
  );
};
