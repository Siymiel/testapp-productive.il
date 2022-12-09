/* eslint-disable prettier/prettier */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';

export const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    return;
  }
};

//After refresh, check if there is any data in the localstorage
const loadState = () => {
  const serialState = localStorage.getItem('state');
  if (serialState === null || undefined) {
    return undefined;
  }
  return JSON.parse(serialState);
};

const persistedState = loadState();

//These are the reducers which do not change
const staticReducers = {
  user: userReducer
};

const initialStore = {
  ...persistedState
};

const createReducers = () => {
  return combineReducers({
    ...staticReducers
  });
};

export const store = configureStore({
  reducer: createReducers(),
  preloadedState: initialStore,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
