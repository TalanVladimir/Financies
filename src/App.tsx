/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {SafeArea} from './components/SafeArea/SafeArea';
import {Navigation} from './components/Navigation/Navigation';
import {ThemeProvider} from './providers/ThemeProvider';
import {store} from './redux/store/store';

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeArea>
          <Navigation />
        </SafeArea>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
