import { configureStore } from "@reduxjs/toolkit";
import fetchWeatherReducer from "./features/fetchWeather";
import userDataReducer from "./features/userData";

export default configureStore({
  reducer: {
    fetchWeather: fetchWeatherReducer,
    userData: userDataReducer,
  },
});