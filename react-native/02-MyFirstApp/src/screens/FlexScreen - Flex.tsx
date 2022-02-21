import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
      <View style={styles.container}>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // 1 equivale al 100% de espacio disponible por el padre
        flex: 1,
        backgroundColor: '#28C4D9'
    },
    box1: {
        // En este caso no aplica el 100% del espacio del padre porque hay otras cajas y esas ocupan un poco de espacio
        // La suma de los flexs es el 100% del espacio disponible y dependiendo del valor de cada componente es su espacio
        // flex: 4, flex: 4, flex: 2 da un total de 10, por lo tanto equivale a 40%, 40% y 20%
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box2: {
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box3: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    }
});