import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {    
        borderRadius: 20,
        width: Dimensions.get("window").width/1.1,
        height: Dimensions.get("window").height/1.5,
    },
    linearGradient: {
       flex: 1,
       borderRadius: 40,
       paddingRight: 20,
       paddingLeft: 20,
       backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.1)'
    },
    titleContainer: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        margin: 10, 
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginBottom: 40,
    },
    buttonsContainer: {
        alignItems: 'center',
        height: Dimensions.get('window').height/4,
        margin: 15,
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#585d57',
        width: Dimensions.get('window').width/1.4,
        height: Dimensions.get('window').height/27,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    logOutButton: {
        backgroundColor: '#585d57',
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').height/27,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});