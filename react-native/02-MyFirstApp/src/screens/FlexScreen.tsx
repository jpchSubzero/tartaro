import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
      <View style={styles.container}>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
         <Text style={styles.box1}>Caja 1</Text>
         <Text style={styles.box2}>Caja 2</Text>
         <Text style={styles.box3}>Caja 3</Text>
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
        alignItems: 'flex-start',
        
        // Maneja el flujo de hijos dentro del espacio que tiene para sus hijos, por defecto es no warp y tambien hay warp
        flexWrap: 'wrap',
    },
    box1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
    },
    box2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
    },
    box3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
    }
});