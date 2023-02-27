import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'shared/Theme/hooks/useTheme';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <button className={classNames(styles.themeSwitcher, {}, [])} onClick={changeTheme} type="button">change theme</button>
  );
};
