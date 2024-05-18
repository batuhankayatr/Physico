import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {    
    borderRadius: 20,
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 1.5,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
  },
  titleContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  buttonsContainer: {
    alignItems: 'center',
    height: Dimensions.get('window').height / 4,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#585d57',
    width: Dimensions.get('window').width/1.4,
    height: Dimensions.get('window').height/24,
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
    fontWeight: 'bold',
  },
});
