/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allUsers: null,
    isFetching: false,
    error: false
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsersStart: (state) => {
            state.isFetching = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        getAllUsersFail: (state) => {
            state.isFetching = false;
            state.error = true
        }
    }
});

export const { getAllUsersStart, getAllUsersSuccess, getAllUsersFail } = usersSlice.actions
export default usersSlice.reducer