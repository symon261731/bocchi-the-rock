import React, { useRef, useState } from 'react';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { usePlayer } from '../../../shared/Player/hooks/usePlayer';
import { Card } from '../../../widgets/Card/ui/Card';
import { SongsList } from '../../../widgets/SongsList/ui/SongsList';
import './MainPage.scss';



export const MainPage = () => {
    const [songs,setSongs] = useState([]);

    return(
        <div className={classNames('mainPage',{},[])}>
            <Card songs={songs} />
            <SongsList songs={songs} setSongs={setSongs} classNameValue={'flex'}/>
        </div>
    )
}