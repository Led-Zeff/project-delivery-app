import { DefaultTheme } from 'react-native-paper';

export const paperTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196f3',
    accent: '#0069c0',
  },
};
