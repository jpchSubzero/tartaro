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
        flex: 1,
        backgroundColor: '#28C4D9',
        // Por defecto es flex-start además hay: flex-end, center, space-between, space-around, space-evenly.  Esto depende de si la dirección del flex es columna o fila
        justifyContent: 'space-evenly'
    },
    box1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    }
});