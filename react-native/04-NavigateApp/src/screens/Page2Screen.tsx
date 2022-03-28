import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/core';

export const Page2Screen = () => {

  // El uso de este hook resulta ineficiente en el caso de stack navigation ya que el StackNavigation ya proporciona el navigate en las props
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: "Página 2 hijo",
      headerBackTitle: "Atrás"
    });
  }, []);
  
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page2Screen</Text>
        <Button 
          title="Ir a página 3"
          onPress={() => navigator.navigate("Page3Screen")}
        />
      </View>
  )
}
