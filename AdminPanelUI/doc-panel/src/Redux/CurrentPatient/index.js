import { createSlice } from "@reduxjs/toolkit";

export const CurrentPatientSlice = createSlice({
  name: "CurrentPatient",
  initialState: {
    CurrentPatient: {},
  },
  reducers: {
    addCurrentPatient: (state, action) => {
      state.CurrentPatient = action.payload;
    },
    removeCurrentPatient: (state, action) => {
      state.CurrentPatient = {};
    },
  },
});

export const { addCurrentPatient, removeCurrentPatient } = CurrentPatientSlice.actions;
export const selectCurrentPatient = (state) => state.CurrentPatient.CurrentPatient;

export default CurrentPatientSlice.reducer;
