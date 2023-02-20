import React, { FC, useEffect, useState } from 'react';
import './SongList.scss';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { deezerApi } from '../../../api/deezer';
interface SongsListProps {
    classNameValue?: string;
    setCurrentName?: React.Dispatch<React.SetStateAction<string>>;
    setCurrentMp?: React.Dispatch<React.SetStateAction<string>>; 
    currentSong?: String;
}

export const SongsList: FC<SongsListProps> = (
    {currentSong,
     setCurrentName,
     classNameValue,
     setCurrentMp}) => {
    
    const [songs,setSongs] = useState([]);

    const chooseSong =  (el:string) => {
        setCurrentName(el);
    }

    const isChosenSong = (element: string) => {
        if (element === currentSong) return true;
        return false;
    }

    useEffect(()=> {
     
    deezerApi.getAlbum().then(form => {
        console.log(form)
        setSongs((prev)=> [prev, ...form.tracks.data])} )
    },[])

    return (
    <div className={classNames('',{},[classNameValue])}>
        <ul className='songs'>
            {songs?.map((el)=> 
            <li 
            onClick={()=> {
                chooseSong(el.title)
                setCurrentMp(el.preview)
            }}
            key={el.title} 
            className={classNames('one-song',{chosen : isChosenSong(el)},[])}>
                {el.title}
            </li>
            )}
        </ul>
    </div>
    )
}