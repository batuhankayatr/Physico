import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useCallback } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";

const ExerciseDetailPage = ({ route }) => {
  const [playing, setPlaying] = useState(false);
  const { exercise } = route.params;
  const navigation = useNavigation();

  const data = [
    { key: "true", value: "Done ✓" },
    { key: "false", value: "Not Done ✗" },
  ];

  const [selected, setSelected] = useState(exercise.isDone ? "✓" : "✗");

  const updateIsDone = () => {
    axios
      .post(
        `http://192.168.56.1:5000/api/exercise/${exercise._id}/doneExercise`,
        { patientId: exercise.patientId }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        colors={["#e8e7de", "#97BE5A"]}
        style={styles.linearGradient}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
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
            <Text style={styles.task}>
              {exercise.set} Sets {exercise.repeats} Repeats
            </Text>
          </View>
          <Text style={styles.description}>{exercise.description}</Text>
          <View style={{ marginTop: 30 }}>
            <SelectList
              setSelected={(val) => setSelected(val === "✓" ? true : false)}
              data={data}
              save="value"
              defaultOption={{
                key: exercise.isDone ? "true" : "false",
                value: exercise.isDone ? "Done ✓" : "Not Done ✗",
              }}
              onSelect={updateIsDone}
              search={false}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ExerciseDetailPage;
