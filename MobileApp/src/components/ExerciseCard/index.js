import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

const ExerciseCard = ({ day, exercises }) => {

  const navigation = useNavigation();
  console.log(exercises, "exercises");
 return (
    <>
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={["#ddecd7", "white"]}
        style={styles.container}
      >
        <View style={styles.date}>
          <Text>{day}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          {exercises.map((exercise, index) => (
            <View key={index} style={styles.detail}>
              <View style={{width: Dimensions.get('window').width/5}}>
              <Text>{exercise.name}</Text>
              </View>
              <View style={{width: Dimensions.get('window').width/7, alignItems: 'center'}}>
              <Text>{exercise.sets} sets</Text>
              </View>
              <View style={{width: Dimensions.get('window').width/5, alignItems: 'center'}}>
              <Text>{exercise.repeats} repeats</Text>
              </View>
              
              <TouchableOpacity style={styles.more_button} onPress={() => navigation.navigate('ExerciseDetailPage')}>
                <Text style={{color: 'white'}}>More...</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </LinearGradient>
    </>
 );
};

export default ExerciseCard;