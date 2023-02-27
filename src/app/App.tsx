import React from 'react';
import { MainPage } from 'pages/MainPage/ui/MainPage';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'shared/Theme/hooks/useTheme';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <ThemeSwitcher />
      <MainPage />
    </div>
  );
};
export default App;
