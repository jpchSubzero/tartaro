import React from 'react';
import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { HelloWorldScreen } from './src/components/HelloWorldScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TaskScreen } from './src/screens/TaskScreen';

export const App = () => {
  return (
    // Renderiza desde donde inicia el área utilizable, en caso de notchs empieza más abajo, pero causa problemas con backgrounds
    // El height es para determinar el área disponible para los hijos, si no se le asigna siempre será el espacio más pequeño posible
    <SafeAreaView style={{height: '80%', width: '80%', backgroundColor: '#BBFFFF'}}>
      {/* <HelloWorldScreen />    
      <CounterScreen />    */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TaskScreen />
    </SafeAreaView>
  );
}
