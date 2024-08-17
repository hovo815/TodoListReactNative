import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instance';

export const addTodoThunks = createAsyncThunk(
  'addTodoThunks',
  async (value?: any,) => {
    console.log(value, 'value');
    try {
      const response = await instance.post('api/v1/todo',{
        "title": value.title,
        "description": value.description
      });
      console.log(response.data,'response.data');
      return response.data;
    } catch (error: any) {
      console.log(error, 'error');
      return error.response?.data || error.message;
    }
  }
);
