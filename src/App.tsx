import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ShoppingScreen } from './screens/shopping/ShoppingScreen';
import { paperTheme } from './theme/paperTheme';

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <ShoppingScreen />
    </PaperProvider>
  );
};

export default App;
