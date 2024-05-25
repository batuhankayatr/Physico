import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./style.js";
import ExerciseCard from "../../components/ExerciseCard/index.js";

const ExercisePage = () => {
  const { userData } = useSelector((state) => state.userData);
  const [groupedExercises, setGroupedExercises] = useState({});

  useEffect(() => {
    const userId = userData.id;
    axios.get(`http://192.168.1.37:5000/api/exercise/myExercises/${userId}/`)
      .then((response) => {
        const exercises = response.data.data;
        const grouped = groupExercisesByDay(exercises);
        setGroupedExercises(grouped);
        console.log(grouped);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userData]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#e8e7de", "#2ba64c"]} style={styles.linearGradient}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
                />
              </View>
              <View>
                <Text style={{ fontSize: 25, marginLeft: 20, color: "#636363" }}>
                  My Exercises
                </Text>
              </View>
            </>
          }
          data={Object.keys(groupedExercises)}
          renderItem={({ item }) => (
            <ExerciseCard day={item} exercises={groupedExercises[item]} />
          )}
          keyExtractor={(item) => item}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const groupExercisesByDay = (exercises) => {
  return exercises.reduce((acc, exercise) => {
    const { day } = exercise;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(exercise);
    return acc;
  }, {});
};

export default ExercisePage;
