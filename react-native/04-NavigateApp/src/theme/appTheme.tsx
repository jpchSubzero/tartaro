import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    buttonLarge: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    buttonLargeText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
        alignItems: "center"
    },
    menuButton: {
        marginVertical: 10
    },
    menuItem: {
        fontSize: 20,
    }
});