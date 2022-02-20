import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';

interface Props {
    title: string,
    onPress: () => void,
    style?: 'bl' | 'br'
}

export const Fab = ({title, onPress, style = 'br'}:Props) => {
    const ios = () => {
        return (
            <TouchableOpacity
            activeOpacity={0.75}
                style={[styles.fabLocationBottom, style == 'br' ? styles.right : styles.left]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>            
        );
    };

    const android = () => {
        return (
            <View
                style={[styles.fabLocationBottom, style === 'br' ? styles.right : styles.left]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', true, 30)}
                    // Seleccionar estilo con operador ternario entre estilos con propiedades repetidas
                    // style={style == 'br' ? styles.fabLocationBottomRight : styles.fabLocationBottomLeft}

                    // Selecci.nar estilo principal y agregar estilo secundario con operador ternario a través de arreglo de estilos
                    // style={[styles.fabLocationBottom, style == 'br' ? styles.right : styles.left]}
                    >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>            
        );
    };

    return Platform.OS === 'ios' ? ios() : android();

    // return (
        // <TouchableOpacity
        // <View
        //     style={[styles.fabLocationBottom, style == 'br' ? styles.right : styles.left]}
        // >
        //     <TouchableNativeFeedback
        //         onPress={onPress}
        //         background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
        //         // Seleccionar estilo con operador ternario entre estilos con propiedades repetidas
        //         // style={style == 'br' ? styles.fabLocationBottomRight : styles.fabLocationBottomLeft}

        //         // Selecci.nar estilo principal y agregar estilo secundario con operador ternario a través de arreglo de estilos
        //         // style={[styles.fabLocationBottom, style == 'br' ? styles.right : styles.left]}
        //         >
        //         <View style={styles.fab}>
        //             <Text style={styles.fabText}>
        //                 {title}
        //             </Text>
        //         </View>
        //     </TouchableNativeFeedback>
        // </View>
        // </TouchableOpacity>
    // )
}

const styles = StyleSheet.create({
    // Floating Action Button
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#28425B",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 3,        
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    fabLocationBottom: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    }
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