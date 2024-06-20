import { createSlice } from '@reduxjs/toolkit';

export const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    totalExercises: 0,
    doneExercisesCount: 0,
  },
  reducers: {
    updateProgress: (state, action) => {
      state.totalExercises = action.payload.total;
      state.doneExercisesCount = action.payload.done;
    },
  },
});

export const { updateProgress } = progressSlice.actions;

export default progressSlice.reducer;