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
      marginTop: 70,
      height: Dimensions.get("window").height / 4,
  
    },
    logo: {
      width: "100%",
      height: "100%",
      marginLeft: 15,
    },
    inputContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    buttonContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      marginTop: 40,
    },
    bottomContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: 20,
      marginBottom: 20,
    },
  });