import React, { useState } from 'react';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { Card } from '../../../widgets/Card/ui/Card';
import { SongsList } from '../../../widgets/SongsList/ui/SongsList';
import './MainPage.scss';



export const MainPage = () => {
    const [currentName, setCurrentName] = useState('');
    return(
        <div className={classNames('mainPage',{},[])}>
            <Card currentName={currentName}/>
            <SongsList setCurrentName={setCurrentName}/>
        </div>
    )
}