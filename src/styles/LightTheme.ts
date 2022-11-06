import {ThemeType} from '../types/theme';
import {InitTheme} from './InitTheme';

export const LightTheme: ThemeType = {
  isDark: false,
  colors: {
    ...InitTheme.colors,
    primaryDark: '#FF8C00',
    primaryLight: '#FFCB8D',
    primary: '#FFAC46',
    text: '#FFFFFF',
    accent: '#E95D5D',
    primaryText: '#646464',
    secondaryText: '#9F9F9F',
    divider: '#CECECE',
  },
};
