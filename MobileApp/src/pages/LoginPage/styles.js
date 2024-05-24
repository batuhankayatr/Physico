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
    modalButton: {
      backgroundColor: "#585d57",
      width: Dimensions.get("window").width / 1.9,
      height: Dimensions.get("window").height / 24,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      borderWidth: 1,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    modalAccView: {
      margin: 20,
      backgroundColor: "#2ba64c",
      borderRadius: 20,
      padding: 20,
      width: Dimensions.get("window").width / 1.2,
      height: Dimensions.get("window").height / 2.7,
      borderWidth: 1,
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      color: 'white',
      paddingLeft: 20,
      paddingRight: 20,
    },
    errorText: {
      color: "red",
      fontSize: 14,
    },
  });