import React from 'react'
import { TextInput } from 'react-native';

const Input  = ({placeholder}) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} />
  )
}

const styles = {
  input: {
    padding: 8,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '70%',
  }
}

export default Input;