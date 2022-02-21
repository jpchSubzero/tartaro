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
        flexDirection: 'row'
    },
    box1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,

        // Por defecto es stretch y tiene las opciones: flex-start, flex-end, center, baseline. Sobreescribe la alineación que el padre les haya asignado a los hijos
        alignSelf: 'center'
    },
    box2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    box3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
        alignSelf: 'flex-start'
    }
});