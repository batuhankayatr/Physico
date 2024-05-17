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
    },
    logo: {
      width: "50%",
      height: "50%",
      marginLeft: 5,
    },
});