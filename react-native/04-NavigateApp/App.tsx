import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicLateralMenu } from './src/navigator/BasicLateralMenu';
import { LateralMenu } from './src/navigator/LateralMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>App</Text> */}

      {/* Utilizar Stack Navigator para navegar */}
      {/* <StackNavigator /> */}

      {/* Utilizar Draw Navigator para navegar con menú básico */}
      {/* <BasicLateralMenu /> */}

      {/* Utilizar Draw Navigator para navegar con menú personalizado */}
      <LateralMenu />
    </NavigationContainer>
  )
}

export default App;