import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/sracks/MainStack';
import UserContextProvider from './src/contexts/UserContext';

// tempo da aula 02:20:00
export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
