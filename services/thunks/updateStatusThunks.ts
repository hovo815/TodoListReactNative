import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instance';

export const updateStatusThunks = createAsyncThunk(
  'updateStatusThunks',
  async (id?: any,) => {
    console.log(id, 'value');
    try {
      const response = await instance.put(`api/v1/todo/status/${id}`);
      console.log(response.data,'updateStatusThunks response.data');
      return response.data;
    } catch (error: any) {
      console.log(error, 'updateStatusThunks error');
      return error.response?.data || error.message;
    }
  }
);
