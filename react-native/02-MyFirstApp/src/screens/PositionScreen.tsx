import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
       <View style={styles.greenBox} />
       <View style={styles.violetBox} />
       <View style={styles.orangeBox} />
    </View>
  )
}

// Por defecto los componentes tienen la posición relativa
const styles = StyleSheet.create({
    // Para relativo
    // container: {
    //     flex: 1,
    //     backgroundColor: '#28C4D9',

    //     // Estas propiedades de alineación parece que no sirven pero es porque primero el padre ejecuta (centrar) y luego, desde el centro, es decir, la posición relativa del padre los hijos se mueven con top y left
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // violetBox: {
    //     backgroundColor: '#5856D6',
    //     height: 100,
    //     width: 100,
    //     borderWidth: 10, 
    //     borderColor: 'white', 
    //     top: 60,
    //     left: -60,
    // },
    // orangeBox: {
    //     backgroundColor: '#F0A23B',
    //     height: 100,
    //     width: 100,
    //     borderWidth: 10, 
    //     borderColor: 'white',
    //     top: 60,
    //     left: 120,
    // }

    // Para absoluto
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        height: 600,
        width: 300,
    },
    violetBox: {
        backgroundColor: '#5856D6',
        height: 100,
        width: 100,
        borderWidth: 10, 
        borderColor: 'white', 
        position: 'absolute',
        top: 0,
        right: 0
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        height: 100,
        width: 100,
        borderWidth: 10, 
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    greenBox: {
        backgroundColor: 'green',
        borderWidth: 10, 
        borderColor: 'white',
        // height: 100,
        // width: 100,
        // position: 'absolute',
        // top: 0,
        // left: 0
        // bottom: 0,
        // right: 0
        // Esta propiedad hace que el objeto ocupe todo el espacio que su padre permite
        ...StyleSheet.absoluteFillObject
    }

});
