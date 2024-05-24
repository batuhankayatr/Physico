import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    linearGradient: {
      flex: 1,
      alignItems: 'center',
    },
    logoContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: Dimensions.get("window").height / 10,
      flexDirection: 'row',
    },
    logo: {
      width: "50%",
      height: "50%",
      marginLeft: 5,
    },
    weatherContainer: {
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
    },
    weatherTextContainer: {
      width: '50%',
      justifyContent: 'center',
    },
    weatherIcon: {
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').height/6.2, 
        alignSelf: 'center',
    },
    weatherText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 40
    },
    progressBar: {
      paddingTop: 20,
      alignItems: 'center',
      height: Dimensions.get('window').height/2.6,
      width: Dimensions.get('window').width/1.1,
      backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.1)',
      borderRadius: 20,
      margin: 20,
    },
    animation: {
      width: Dimensions.get('window').width/1.2,
      height: Dimensions.get('window').height/6,
      marginLeft: 15,
    },
});