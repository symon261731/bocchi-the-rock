import React, { useState } from 'react';
import { useTheme } from '../../../shared/Theme/hooks/useTheme';
import { Theme } from '../../../shared/Theme/ThemeContext';




export const ThemeSwitcher = () => {
    const { toggleTheme} = useTheme();
    const changeTheme = () => {
        toggleTheme();
    }
    return(<button onClick={changeTheme} type='button'>change theme</button>)
}