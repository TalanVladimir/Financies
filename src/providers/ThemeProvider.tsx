import React from 'react';
import {createContext, PropsWithChildren} from 'react';
import {useColorScheme} from 'react-native';
import {DarkTheme} from '../styles/DarkTheme';
import {InitTheme} from '../styles/InitTheme';
import {LightTheme} from '../styles/LightTheme';
import {ThemeType} from '../types/theme';

export const ThemeContext = createContext<ThemeType>(InitTheme);

export const ThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeContext.Provider value={isDarkMode ? DarkTheme : LightTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
