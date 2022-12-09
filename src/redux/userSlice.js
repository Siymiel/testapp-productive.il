/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
        state.isFetching = true;
    },
    loginSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
    },
    loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
    },
    logoutStart: (state) => {
        state.isFetching = true;
    },
    logoutSuccess: (state) => {
        state.isFetching = false;
        state.currentUser = null;
    },
    logoutFailure: (state) => {
        state.isFetching = false;
        state.error = true;
    }
  }
});

export const { 
  loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure 
} = userSlice.actions;
export default userSlice.reducer;
