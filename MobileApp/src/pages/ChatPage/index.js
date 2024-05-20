import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const ChatPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#e8e7de", "#2ba64c"]}
        style={styles.linearGradient}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
          />
        </View>
      </LinearGradient>
      
    </SafeAreaView>
  );
};

export default ChatPage;
