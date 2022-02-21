import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// Obtener las dimensiones de la pantalla de forma estática, si se cambia la orientación de la pantalla los valores no cambian
const dimensions = Dimensions.get('window');

export const DimensionsScreen = () => {
    // hook para obtener las dimensiones en tiempo real
    const {width, height} = useWindowDimensions();

  return (
      <View>
        <View style={styles.container}>
            {/* <View style={styles.violetBox}/> */}
            {/* Manejar ancho o algo a través de el hook de dimensiones, se puede utilizar un ancho mayor al 100% en caso de scrolling */}
            <View style={{
                ...styles.violetBox,
                width: width * 2
            }}/>
            <View style={styles.orangeBox}/>
            <Text style={styles.title}>Static W: {dimensions.width}px, Static H: {dimensions.height}px</Text>
            <Text style={styles.title}>Dinamic W: {width}px, Dinamic H: {height}px</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '80%', 
        width: '80%', 
        backgroundColor: 'blue',
        borderWidth: 3
    },
    violetBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        // A pesar de poner un width de 100% no ocupa todo porque el padre, container, solo esta aplicando el 80%
        width: '100%',
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        height: '50%',
        width: '50%',
    },
    title: { 
        fontSize: 20,
        textAlign: 'center'
    }
});