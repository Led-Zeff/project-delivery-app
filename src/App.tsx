import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ShoppingScreen } from './screens/shopping/ShoppingScreen';
import { store, StoreContext } from './stores/store';
import { paperTheme } from './theme/paperTheme';

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <PaperProvider theme={paperTheme}>
        <StatusBar
          backgroundColor={paperTheme.colors.accent}
          barStyle="light-content"
        />
        <ShoppingScreen />
      </PaperProvider>
    </StoreContext.Provider>
  );
};

export default App;
