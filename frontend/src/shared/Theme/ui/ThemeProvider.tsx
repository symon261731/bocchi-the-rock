import React,{ FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProps {
    children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProps> = (props) => {
  const {children} = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};