import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instance';

export const getTodoThunks = createAsyncThunk(
  'getTodoThunks',
  async () => {
    try {
      const response = await instance.get('api/v1/todo',);
      console.log(response.data,'getTodoThunksgetTodoThunksgetTodoThunks');
      return response.data;
    } catch (error: any) {
      console.log(error, 'geterror');
      return error.response?.data || error.message;
    }
  }
);
