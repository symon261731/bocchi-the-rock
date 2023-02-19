import React, { useState } from 'react';
import { classNames } from '../shared/lib/helpers/classNames/classNames';
import { Card } from '../widgets/Card/ui/Card';
import './styles/index.scss';

enum Theme  {
    LIGHT = 'light',
    DARK = 'dark',
}


const App = () => {
    const [theme, setTheme] = useState(Theme.LIGHT);
    const changeTheme = () => {
        setTheme((prev)=> prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }
    return (
    <div className={classNames('app', {}, [theme])} >
        <button onClick={changeTheme} type='button'>change theme</button>
        <Card></Card>
    </div>)
}
export default App;