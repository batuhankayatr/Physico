import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#a6cf97", "#e8e7de"]}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Log In" />
          <TouchableOpacity>
            <Text>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log("Navigating to SignUp");
              navigation.navigate('HomeStack');
            }}
          >
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginPage;
