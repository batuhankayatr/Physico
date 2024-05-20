import React from "react";
import { TextInput } from "react-native";

const ModalInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = {
  input: {
    padding: 8,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: "70%",
    borderWidth: 1,
  },
};

export default ModalInput;
