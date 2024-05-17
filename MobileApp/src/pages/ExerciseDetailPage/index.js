import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./styles";

const ExerciseDetailPage = () => {
  const [playing, setPlaying] = useState(false);

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
        colors={["#e8e7de", "#a6cf97"]}
        style={styles.linearGradient}
      >
        
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
            videoId={"lwKeQoXk4mk"}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.description_container}>
          <View>
          <Text style={styles.title}>Bench Press</Text>
          </View>
          <View>
          <Text style={styles.task}>3 sets 12 repeats</Text>
          </View>
          <Text style={styles.description}>
            The bench press, or chest press, is a weight training exercise where
            a person presses a weight upwards while lying horizontally on a
            weight training bench. The bench press is a compound movement, with
            the primary muscles involved being the pectoralis major, the
            anterior deltoids, and the triceps brachii, alongside other muscles
            for stabilization. A barbell is generally used to hold the weight,
            but a pair of dumbbells can also be used.
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
