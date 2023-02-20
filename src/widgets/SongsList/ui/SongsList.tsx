import React, { FC, useEffect, useState } from 'react';
import './SongList.scss';
import axios from 'axios';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';

interface SongsListProps {
    classNameValue?: string;
    setCurrentName: React.Dispatch<React.SetStateAction<string>>;
    currentSong: String;
}

export const SongsList: FC<SongsListProps> = ({currentSong, setCurrentName, classNameValue}) => {
    
    const [songs,setSongs] = useState([]);

    const chooseSong =  (el:string) => {
        setCurrentName(el);
        const responce =  axios.post('http://localhost:3005/getSong',{el})
        responce.then(res=> console.log(res));
    }

    const isChosenSong = (element: string) => {
        if (element === currentSong) return true;
        return false;
    }

    useEffect(()=>{
        fetch('http://localhost:3005/').then(res=> res.json()).then(data=>setSongs(data));
    },[])
    return (
    <div className={classNames('',{},[classNameValue])}>
        <ul className='songs'>
            {songs?.map((el)=> 
            <li 
            onClick={()=> {chooseSong(el)}}
            key={el} 
            className={classNames('one-song',{chosen : isChosenSong(el)},[])}>
                {el}
            </li>
            )}
        </ul>
    </div>
    )
}