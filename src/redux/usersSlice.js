/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allUsers: null,
    singleUser: null,
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
        },
        getSingleUserStart: (state) => {
            state.isFetching = true;
        },
        getSingleUserSuccess: (state, action) => {
            state.isFetching = false;
            state.singleUser = action.payload
        },
        getSingleUserFail: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { 
    getAllUsersStart, 
    getAllUsersSuccess, 
    getAllUsersFail, 
    getSingleUserStart, 
    getSingleUserSuccess, 
    getSingleUserFail 
} = usersSlice.actions
export default usersSlice.reducer