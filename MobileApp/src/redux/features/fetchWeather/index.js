import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as Location from "expo-location";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchWeather = createAsyncThunk("fetchWeather", async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.error("Konum izinleri reddedildi");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dad7535d291a2e52d8148ba28f287cf4`
  );

  return response.data;
});

const fetchWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default fetchWeatherSlice.reducer;
