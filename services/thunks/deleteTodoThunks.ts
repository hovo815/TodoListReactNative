import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instance';

export const deleteTodoThunks = createAsyncThunk(
  'deleteTodoThunks',
  async (value?: any,) => {
    console.log(value, 'value');
    try {
      const response = await instance.delete(`api/v1/todo/${value}`,);
      console.log(response.data,'response.data');
      return response.data;
    } catch (error: any) {
      console.log(error, 'error');
      return error.response?.data || error.message;
    }
  }
);
