import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linearGradient}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enes</Text>
      </View>
      <View style={styles.information}>
        <View>
          <Text>Age: 23</Text>
          <Text>Male</Text>
          <Text>Weight: 102</Text>
          <Text>Height: 1.84</Text>
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
