import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ShoppingScreen } from './screens/shopping/ShoppingScreen';
import { paperTheme } from './theme/paperTheme';

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar
        backgroundColor={paperTheme.colors.accent}
        barStyle="light-content"
      />
      <ShoppingScreen />
    </PaperProvider>
  );
};

export default App;
