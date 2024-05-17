import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileCard = ({props}) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.linearGradient}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.information}>
        <View>
          <Text>Age: {props.age}</Text>
          <Text>{props.sex}</Text>
          <Text>Weight: {props.weight}</Text>
          <Text>Height: {props.height}</Text>
        </View>
        <View>
          <Text>Your Doctor: Furkan Yılmaz</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Profile Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logOutButton}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default ProfileCard;
