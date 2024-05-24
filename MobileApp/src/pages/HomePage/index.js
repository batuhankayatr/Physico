import React, { useState, useEffect } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
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


const HomePage = () => {
  const weatherData = useSelector((state) => state.fetchWeather);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    dispatch(fetchWeather());
  
  }, [dispatch]);

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
      {weatherData.loading ? (
        <LinearGradient
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          colors={["black", "#2ba64c"]}
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
          colors={["#e8e7de", "#2ba64c"]}
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
              size={250}
              width={20}
              color={"green"}
              backgroundColor={"white"}
              animateFromValue={progress}
              showPercentageSymbol
              showProgressLabel
              subtitle="Today's Progress"
            />
          </View>
  
            <FruitsCard />
      
        </LinearGradient>
      )}
    </SafeAreaView>
  );
};

export default HomePage;
