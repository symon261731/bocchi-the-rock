import { useContext } from 'react';
import { DataValue } from '../../../widgets/SongsList/ui/SongsList';
import { PlayerContext } from '../PlayerContext';

export const usePlayer = () => {
  const {
    currentSong, isPlaying, setIsPlaying, setCurrentSong,
  } = useContext(PlayerContext);

  const changeTrack = (elem: DataValue) => {
    setCurrentSong(elem);
  };

  return {
    currentSong, changeTrack, isPlaying, setIsPlaying,
  };
};
