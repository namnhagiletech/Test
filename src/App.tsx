import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootRouter from './routers';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </Provider>
  );
}
