import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchFruit = createAsyncThunk("fetchFruit", async () => {

  const response = await axios.get(
    "https://www.fruityvice.com/api/fruit/all"
  );

  return response.data;
});

const fetchFruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFruit.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchFruit.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchFruit.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default fetchFruitSlice.reducer;
