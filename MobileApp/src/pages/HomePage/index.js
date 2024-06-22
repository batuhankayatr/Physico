import React, { useState, useEffect } from "react";
import { Text, View, Image, ActivityIndicator, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";
import axios from "axios";
import styles from "./styles.js";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/features/fetchWeather/index.js";
import LottieView from "lottie-react-native";
import FruitsCard from "../../components/FruitCard/index.js";
import { updateProgress } from "../../redux/features/progress/index.js";


const HomePage = () => {
  const weatherData = useSelector((state) => state.fetchWeather);
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    dispatch(fetchWeather());
    const fetchExercises = () => {
      const userId = userData.id;
    axios.get(`http://192.168.56.1:5000/api/exercise/myExercises/${userId}/`)
     .then((response) => {
        const exercises = response.data.data;
        dispatch(updateProgress({ total: exercises.length, done: exercises.filter(exercise => exercise.isDone).length }));
        setProgress((exercises.filter(exercise => exercise.isDone).length / exercises.length) * 100);
      })
     .catch((error) => {
        console.error("There is no exercise data for this user", error);
      });
  };

    fetchExercises();

    const intervalId = setInterval(fetchExercises, 5000);

    return () => clearInterval(intervalId);

    }, [userData]);
    
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return (
          <Image
            source={require("../../../assets/7084486.png")}
            style={styles.weatherIcon}
          />
        );
      case "Rain":
        return (
          <Image
            source={require("../../../assets/4150897.png")}
            style={styles.weatherIcon}
          />
        );
      case "Snow":
        return (
          <Image
            source={require("../../../assets/6635320.png")}
            style={styles.weatherIcon}
          />
        );
      case "Thunderstorm":
        return (
          <Image
            source={require("../../../assets/thunderstorm.png")}
            style={styles.weatherIcon}
          />
        );
      case "Drizzle":
        return (
          <Image
            source={require("../../../assets/6635320.png")}
            style={styles.weatherIcon}
          />
        );
      case "Fog":
        return (
          <Image
            source={require("../../../assets/6635320.png")}
            style={styles.weatherIcon}
          />
        );
      default:
        return (
          <Image
            source={require("../../../assets/6355765.png")}
            style={styles.weatherIcon}
          />
        );
    }
  };

  const getMotivationalMessage = (weather) => {
    switch (weather) {
      case "Clouds":
        return "Sunny skies mean it's a great day for a run!";
      case "Rain":
        return "Rainy days are perfect for indoor workouts.";
      case "Snow":
        return "Bundle up and enjoy a winter workout!";
      case "Thunderstorm":
        return "Stay indoors and focus on strength training.";
      case "Drizzle":
        return "Light rain? Perfect for a brisk walk.";
      case "Fog":
        return "Foggy days are ideal for yoga and meditation.";
      default:
        return "Enjoy your workout no matter what the weather!";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {weatherData.loading ? (
        <LinearGradient
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          colors={["#e8e7de", "#97BE5A"]}
        >
          <Image
            style={styles.animation}
            source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
          />

          <LottieView
            source={require("../../../assets/running_man_animation.json")}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={["#e8e7de", "#97BE5A"]}
          style={styles.linearGradient}
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
            />
          </View>
          {weatherData.data &&
            weatherData.data.main &&
            weatherData.data.weather &&
            weatherData.data.weather.length > 0 && (
              <>
                <View style={styles.weatherContainer}>
                  <View style={styles.weatherTextContainer}>
                    <Text style={styles.weatherText}>
                      {Math.round(weatherData.data.main.temp - 273.15)}°C
                    </Text>
                    <Text style={styles.motivationalMessage}>
                      {getMotivationalMessage(weatherData.data.weather[0].main)}{" "}
                    </Text>
                  </View>
                  {getWeatherIcon(weatherData.data.weather[0].main)}
                </View>
              </>
            )}
          <View style={styles.progressBar}>
            <AnimatedProgressWheel
              size={Dimensions.get("window").width /2}
              width={20}
              color={"green"}
              backgroundColor={"white"}
              animateFromValue={0}
              progress={progress}
              showPercentageSymbol
              showProgressLabel
              subtitle="Week Progress"
            />
          </View>
            <FruitsCard />
        </LinearGradient>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
