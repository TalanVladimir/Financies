import {ThemeType} from '../types/theme';
import {InitTheme} from './InitTheme';

export const DarkTheme: ThemeType = {
  isDark: true,
  colors: {
    ...InitTheme.colors,
    primaryDark: '#2E2E2E',
    primaryLight: '#EEEEEE',
    primary: '#8E8E8E',
    text: '#FFFFFF',
    accent: '#000000',
    primaryText: '#212121',
    secondaryText: '#757575',
    divider: '#BDBDBD',
  },
};
