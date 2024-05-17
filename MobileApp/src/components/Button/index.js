import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={{color: 'white', textAlign: 'center'}}>{props.title}</Text>
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