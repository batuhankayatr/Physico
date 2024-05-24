import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 40,
    },
    itemContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginBottom: 10,
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