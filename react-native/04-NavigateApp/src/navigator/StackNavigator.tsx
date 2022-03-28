import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { PersonScreen } from '../screens/PersonScreen';

// Interface para definir los parametros y rutas permitidas en la app
export type RootStackParams = {
  Page1Screen: undefined,
  Page2Screen: undefined,
  Page3Screen: undefined,
  PersonScreen: {id: number, name: string},
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Page1Screen"
        screenOptions={{
          // headerShown: false, //Oculta el header
          headerStyle: {
            elevation: 0, //Quitar la sombra de división entre header y body en android
            shadowColor: "transparent" //Quitar la sombra de división entre header y body en ios
          },
          cardStyle: {
            backgroundColor: "white"
          }
        }}
    >
      <Stack.Screen name="Page1Screen" options={{title: "Página 1"}} component={ Page1Screen } />
      <Stack.Screen name="Page2Screen" options={{title: "Página 2"}} component={ Page2Screen } />
      <Stack.Screen name="Page3Screen" options={{title: "Página 3"}} component={ Page3Screen } />
      <Stack.Screen name="PersonScreen" options={{title: "Persona"}} component={ PersonScreen } />
    </Stack.Navigator>
  );
}