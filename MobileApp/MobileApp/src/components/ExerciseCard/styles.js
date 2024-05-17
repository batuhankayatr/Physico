import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        borderRadius: 40,
        margin: 15,
        padding: 10,
    },
    date: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    detail: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    more_button: {
        backgroundColor: "#a6cf97",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        marginLeft: 10,
        width: Dimensions.get("window").width / 4.5,
    },
});