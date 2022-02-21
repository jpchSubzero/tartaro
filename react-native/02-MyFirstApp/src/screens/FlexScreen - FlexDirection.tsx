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
        // Por defecto es column, hay column, row, column-reverse, row-reverse. Los reverse invierten la dirección y orden de los elementos
        flexDirection: 'row'
    },
    box1: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box2: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box3: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    }
});