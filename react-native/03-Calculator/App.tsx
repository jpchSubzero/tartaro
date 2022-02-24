import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen'
import { styles } from './src/themes/AppTheme'

export const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="black" 
      />
      <CalculatorScreen />
    </SafeAreaView>  )
}
