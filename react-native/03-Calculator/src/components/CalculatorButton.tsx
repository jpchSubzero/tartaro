import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    label: string;
    color?: string;
    labelColor?: string;
    extends?: boolean;
    onPress: (value:string) => void;
}

export const CalculatorButton = (props:Props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.label)}>
            <View style={{
                ...styles.button,
                backgroundColor: props.color ? props.color : '#2D2D2D',
                width: props.extends ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: props.labelColor ? props.labelColor : 'white'
                }}>
                    {props.label}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300',
        color: 'white'
    },
});