import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const {userData} = useSelector((state) => state.userData);

  console.log(userData);

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
        <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Profile</Text>
          <Image
            source={{ uri: userData.pic }}
            style={styles.profilePhoto}
          />
        </View>
        <View style={styles.profileCard_container}>
        <ProfileCard props={userData}/>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfilePage;
