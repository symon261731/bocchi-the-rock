import { deezerApi } from 'api/deezer';
import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';

interface IProps {
        setSongs: Dispatch<SetStateAction<any[]>>;

}

export const useGetSongsList = ({ setSongs }: IProps) => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    deezerApi.getAlbum().then((songsList) => {
      if (songsList.error) {
        setError(songsList.error.message);
      } else {
        setSongs(songsList.tracks.data);
      }
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return { isLoading, error };
};
