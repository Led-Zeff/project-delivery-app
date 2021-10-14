import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const paperTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196f3',
    accent: '#0069c0',
  },
};

export const appStyles = StyleSheet.create({
  loading: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
});

export const appSpacing = { sm: 8, md: 16 };
