import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style.js";
import ExerciseCard from "../../components/ExerciseCard/index.js";

const data = [
  {
    day: "Monday",
    exercises: [
      {
        name: "Bench Press",
        sets: 3,
        repeats: 12,
        isDone: false, // Manually set to false
      },
      {
        name: "Deadlift",
        sets: 2,
        repeats: 10,
        isDone: true, // Manually set to true
      },
      {
        name: "Bicep Curl",
        sets: 3,
        repeats: 12,
        isDone: false, // Manually set to false
      },
      {
        name: "Tricep Extension",
        sets: 3,
        repeats: 12,
        isDone: true, // Manually set to true
      },
    ],
  },
  {
    day: "Tuesday",
    exercises: [
      {
        name: "Dumbbell Press",
        sets: 3,
        repeats: 12,
        isDone: true, // Manually set to true
      },
      {
        name: "Overhead Press",
        sets: 3,
        repeats: 8,
        isDone: false, // Manually set to false
      },
    ],
  },
  {
    day: "Wednesday",
    exercises: [
      {
        name: "Squat",
        sets: 3,
        repeats: 12,
        isDone: true, // Manually set to true
      },
      {
        name: "Leg Press",
        sets:  3,
        repeats: 10,
        isDone: false, // Manually set to false
      },
    ],
  },
  {
    day: "Thursday",
    exercises: [
      {
        name: "Pull Up",
        sets: 3,
        repeats: 12,
        isDone: false, // Manually set to false
      },
      {
        name: "Chin Up",
        sets: 3,
        repeats: 10,
        isDone: true, // Manually set to true
      },
    ],
  },
];

const ExercisePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#e8e7de", "#a6cf97"]}
        style={styles.linearGradient}
      >
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
                <Text
                  style={{ fontSize: 25, marginLeft: 20, color: "#636363" }}
                >
                  My Exercises
                </Text>
              </View>
            </>
          }
          data={data}
          renderItem={({ item }) => (
            <ExerciseCard day={item.day} exercises={item.exercises} />
          )}
          keyExtractor={(item) => item.day}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ExercisePage;
