import { configureStore } from "@reduxjs/toolkit";
import fetchWeatherReducer from "./features/fetchWeather";
import userDataReducer from "./features/userData";
import fetchFruitReducer from "./features/fetchFruit";
import progress from "./features/progress";

export default configureStore({
  reducer: {
    fetchWeather: fetchWeatherReducer,
    userData: userDataReducer,
    fetchFruit: fetchFruitReducer,
    progress: progress,
  },
});