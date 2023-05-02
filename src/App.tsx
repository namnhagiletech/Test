import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootRouter from './routers';

export default function App() {
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  );
}
