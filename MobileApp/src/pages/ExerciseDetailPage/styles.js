import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    linearGradient: {
      flex: 1,
    },
    logoContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: Dimensions.get("window").height / 10,
      flexDirection: 'row'
    },
    logo: {
      width: "50%",
      height: "50%",
      marginLeft: 5,
    },
    player_container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    player: {
        width: Dimensions.get("window").width/1.1,
        height: Dimensions.get("window").height/4,
    },
    description_container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 10,
    },
    task: {
        fontSize: 20,
    },
    description: {
        fontSize: 15,
        marginTop: 10,
    },
    backButton: {
      position: "absolute",
      top: 20,
      left: 20,
      zIndex: 1,
    },
});