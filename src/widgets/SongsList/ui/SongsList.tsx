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

export const SongsList: FC<SongsListProps> = (props) => {

    const {currentSong,setCurrentName,classNameValue,setCurrentMp} = props;    
    const [songs,setSongs] = useState([]);
    const [error,setError] = useState('');
    const chooseSong =  (el:string) => {
        setCurrentName(el);
    }

    const [audios, setAudio] = useState('https://cdns-preview-c.dzcdn.net/stream/c-c59dbde437ad17cd27a647460510740f-2.mp3')

    const isChosenSong = (element: string) => {
        if (element === currentSong) return true;
        return false;
    }

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
        {error ?
        <p>{error}</p>  : 
        <ul className='songs'>
            {songs?.map((el, index)=> 
            <li 
            key={index} 
            onClick={()=> {
                chooseSong(el.title)
                setCurrentMp(el.preview)
            }}
            className={classNames('one-song',{chosen : isChosenSong(el)},[])}>
                {el.title}
            </li>
            )}
        </ul>
     }
    </div>
    )
}