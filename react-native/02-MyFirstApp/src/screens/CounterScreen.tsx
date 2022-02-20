import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View
            // Definir manualmente los estilos
            // style={{
            //     flex: 1,
            //     backgroundColor: 'lightblue',
            //     justifyContent: 'center',
            // }}

            // Definir estilos a partir de StyleSheet (tipo CSS)
            style={styles.container}
        >
            <Text style={styles.title}>
                Contador: {counter}
            </Text>
            {/* No se recomiendo mucho Button por su limitación de personalización, no tiene style
            <Button
                onPress={() => setCounter(counter + 1)}
                title="+"
                color="green"
            /> */}
            {/* <TouchableOpacity
                onPress={() => setCounter(counter + 1)}
                style={styles.fabLocationBottomRight}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        +1
                    </Text>
                </View>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
                onPress={() => setCounter(counter - 1)}
                style={styles.fabLocationBottomLeft}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}

            <Fab
                title="-1"
                onPress={() => setCounter(counter - 1)}
                style={'bl'}
            ></Fab>
            <Fab
                title="+1"
                onPress={() => setCounter(counter + 1)}
                style={'br'}
            ></Fab>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -20
    },
    // // Floating Action Button
    // fab: {
    //     backgroundColor: '#5856D6',
    //     borderRadius: 100,
    //     width: 60,
    //     height: 60,
    //     justifyContent: 'center',
    //     shadowColor: 'black',
    // },
    // fabText: {
    //     color: 'white',
    //     fontSize: 25,
    //     fontWeight: 'bold',
    //     alignSelf: 'center'
    // },
    // fabLocationBottomRight: {
    //     position: 'absolute',
    //     bottom: 25,
    //     right: 25
    // },
    // fabLocationBottomLeft: {
    //     position: 'absolute',
    //     bottom: 25,
    //     left: 25
    // }
});