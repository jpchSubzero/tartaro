import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    violetBox: {
        backgroundColor: '#5856D6',
        height: 100,
        width: 100,
        borderWidth: 10, 
        borderColor: 'white', 
        alignSelf: 'flex-end'
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        height: 100,
        width: 100,
        borderWidth: 10, 
        borderColor: 'white',
    },
    blueBox: {
        backgroundColor: '#28C4D9',
        height: 100,
        width: 100,
        borderWidth: 10, 
        borderColor: 'white',
        alignSelf: 'flex-start'
    },
});