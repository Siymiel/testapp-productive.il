/* eslint-disable prettier/prettier */
import { axiosInstance } from '../axiosInstances';
import { loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure } from './userSlice';
import { toast } from 'react-hot-toast';

export const attemptLogin = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axiosInstance.get('/users');
    // Get first user and use as our current user
    const mockUser = res?.data[0];
    // mockUser.email = 'Sincere@april.biz'
    // Create password
    const mockPassword = "12345678";

    if(user.email !== mockUser.email) toast.error('Wrong email provided');
    if(user.password !== mockPassword) toast.error('Wrong password provided');

    if(user.email === mockUser.email && user.password == mockPassword) {
        dispatch(loginSuccess(mockUser));
        toast.success('Successfully logged in!');
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const attemptLogout = async (dispatch) => {
  dispatch(logoutStart());
  
  try {
    dispatch(logoutSuccess())
    toast.success('Successfully logged out.')
  } catch (err) {
    dispatch(logoutFailure())
  }
};