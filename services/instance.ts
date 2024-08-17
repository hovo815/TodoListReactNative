import { BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://test-back.cryptelligence.ai/',
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    console.log(token,'token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
