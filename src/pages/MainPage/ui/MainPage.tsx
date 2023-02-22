import React, { useState } from 'react';
import { classNames } from '../../../shared/lib/helpers/classNames/classNames';
import { Card } from '../../../widgets/Card/ui/Card';
import { SongsList } from '../../../widgets/SongsList/ui/SongsList';
import './MainPage.scss';



export const MainPage = () => {
  
    return(
        <div className={classNames('mainPage',{},[])}>
            <Card />
            <SongsList classNameValue={'flex'}/>
        </div>
    )
}