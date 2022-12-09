/* eslint-disable prettier/prettier */
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
// const API_KEY = 'c0082183-35d6-4d39-ac7b-819c546c3b73';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        accept: 'application/json',
    }
})
