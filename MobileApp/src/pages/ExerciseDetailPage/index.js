import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useCallback } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const ExerciseDetailPage = ({ route }) => {
  const [playing, setPlaying] = useState(false);
  const { exercise } = route.params;
  const navigation = useNavigation();

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#e8e7de", "#2ba64c"]}
        style={styles.linearGradient}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
          />
        </View>
        <View style={styles.player_container}>
          <YoutubePlayer
            width={styles.player.width}
            height={styles.player.height}
            play={playing}
            videoId={exercise.youtubeId}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.description_container}>
          <View>
            <Text style={styles.title}>{exercise.name}</Text>
          </View>
          <View>
            <Text style={styles.task}>{exercise.set} Sets {exercise.repeats} Repeats</Text>
          </View>
          <Text style={styles.description}>
            {exercise.description}
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
