import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => console.log("asdasd")}>
        <Text style={{color: 'white', textAlign: 'center'}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#4f554a',
    borderRadius: 20,
    width: '70%',
    }
  });

export default Button;