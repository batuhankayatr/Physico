import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        userData: {},
    },
    reducers: {
        addUserData: (state, action) => {
            state.userData = action.payload;
        },
        removeData:  (state, action) => {
            state.userData = {};
        },
    },
});

export const { addUserData, removeData } = userDataSlice.actions;
export const selectUserData = state => state.userData.userData;

export default userDataSlice.reducer;