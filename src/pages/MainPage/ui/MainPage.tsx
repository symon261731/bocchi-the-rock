import React, { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Card } from 'widgets/Card/ui/Card';
import { SongsList } from 'widgets/SongsList/ui/SongsList';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const [songs, setSongs] = useState([]);

  return (
    <div className={classNames(styles.mainPage, {}, [])}>
      <Card songs={songs} />
      <SongsList songs={songs} setSongs={setSongs} classNameValue="flex" />
    </div>
  );
};
