import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { store, StoreContext } from './stores/store';
import { paperTheme } from './theme/paperTheme';
import { StackNavigation } from './navigation/StackNavigation';

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        <PaperProvider theme={paperTheme}>
          <StatusBar
            backgroundColor={paperTheme.colors.accent}
            barStyle="light-content"
          />
          <StackNavigation />
        </PaperProvider>
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

export default App;
