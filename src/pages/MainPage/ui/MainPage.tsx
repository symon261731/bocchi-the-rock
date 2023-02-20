import React, { useState } from 'react';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { Card } from '../../../widgets/Card/ui/Card';
import { SongsList } from '../../../widgets/SongsList/ui/SongsList';
import './MainPage.scss';



export const MainPage = () => {
    const [currentName, setCurrentName] = useState('');
    const [currentMp, setCurrentMp] = useState('https://cdns-preview-c.dzcdn.net/stream/c-c59dbde437ad17cd27a647460510740f-2.mp3');

    return(
        <div className={classNames('mainPage',{},[])}>
            <Card
             currentMp={currentMp}
             currentName={currentName}/>
            <SongsList 
            classNameValue={'flex'}
            setCurrentMp={setCurrentMp} 
            currentSong={currentName} 
            setCurrentName={setCurrentName}/>
        </div>
    )
}