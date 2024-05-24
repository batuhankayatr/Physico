import { configureStore } from "@reduxjs/toolkit";
import fetchWeatherReducer from "./features/fetchWeather";
import userDataReducer from "./features/userData";
import fetchFruitReducer from "./features/fetchFruit";

export default configureStore({
  reducer: {
    fetchWeather: fetchWeatherReducer,
    userData: userDataReducer,
    fetchFruit: fetchFruitReducer,
  },
});