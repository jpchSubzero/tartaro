import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';
import { forVerticalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const Drawer = createDrawerNavigator();

export const BasicLateralMenu = () => {
    // Obtener dimensiones de pantalla
    const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator 
        // Para ubicar la barra a la derecha
        screenOptions={{
            drawerPosition: 'right',
            // Si la pantalla está en forVerticalIOS, menor a 768, usa front y sino permanent que hace que el menú esté siempre fijo
            drawerType: width >= 768 ? "permanent" : "front"
        }}
    >
      <Drawer.Screen name="StackNavigator" options={{title: "Home"}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: "Settings"}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}