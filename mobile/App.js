import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
const App = () => (
  <>
    <StatusBar translucent={false} backgroundColor="#9C27B0" />
    <Provider store={store}>
      <Routes />
    </Provider>
  </>
);
export default App;
