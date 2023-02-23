import React, { FC, useContext, useEffect, useState } from 'react';
import './SongList.scss';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { deezerApi } from '../../../api/deezer';
import { PlayerContext } from '../../../shared/Player/PlayerContext';
interface SongsListProps {
    classNameValue?: string;
}

export const SongsList: FC<SongsListProps> = (props) => {
    const {classNameValue} = props;
    
    const {changeSong} = useContext(PlayerContext);
    const [songs,setSongs] = useState([]);
    const [error,setError] = useState('');

    useEffect(()=> {
    deezerApi.getAlbum().then(form => {
        if(form.error){ 
            setError(form.error.message)
        } else{
            setSongs((prev)=> [prev, ...form.tracks.data])}
        })
    },[])

    return (
    <div className={classNames('',{},[classNameValue])}>
        {error ? <p>{error}</p>  : <ul className='songs'>
            {songs?.map((oneSong, index)=> 
            <li 
            key={index} 
            onClick={()=> changeSong(oneSong)}
            className={classNames('one-song', {chosen : false},[])}>
                {oneSong.title}
            </li>
            )}
        </ul>
        }
    </div>
    )
}