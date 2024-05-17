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
    profileContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: Dimensions.get("window").height / 10,
      paddingLeft: 25,
      paddingRight: 25,
    },
    profilePhoto: {
      width: Dimensions.get("window").height / 15,
      height: Dimensions.get("window").height / 15,
      borderRadius: 100,
    },
    profileCard_container: {
      justifyContent: "center",
      alignItems: "center",
    },
});