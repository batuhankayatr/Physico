import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      paddingHorizontal: 10,
      backgroundColor: '#e8e7de',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: Dimensions.get('window').width / 2.2,
      height: Dimensions.get('window').height / 5.5,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    itemNutrition: {
      fontSize: 14,
      color: '#666',
    },
  });