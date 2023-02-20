import React, { FC, useEffect, useState } from 'react';
import './SongList.scss';

interface SongsListProps {
    setCurrentName: React.Dispatch<React.SetStateAction<string>>
}

export const SongsList: FC<SongsListProps> = ({setCurrentName}) => {
    
    const [songs,setSongs] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3005/').then(res=> res.json()).then(data=>setSongs(data));
        console.log(songs)
    },[])
    return (
    <div>
        <ul className='songs'>
            {songs?.map((el)=> 
            <li 
            onClick={()=> setCurrentName(el)}
            key={el} 
            className='one-song'>
                {el}
            </li>
            )}
        </ul>
    </div>
    )
}