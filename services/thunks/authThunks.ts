import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instance';

export const authThunks = createAsyncThunk(
  'authThunks', 
  async () => {
    try {
      const response = await instance.post('api/v1/auth');
      AsyncStorage.setItem('token',response.data.accessToken)
      return response.data;
    } catch (error: any) {
      return error.response?.data || error.message;
    }
  }
);
