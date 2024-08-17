import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instance';

export const editStatusThunks = createAsyncThunk(
  'editStatusThunks',
  async (id: string, { rejectWithValue }) => {
    console.log(id,'id');
    
    try {
      const response = await instance.put(`api/v1/todo/${id}`,{

          "title": "",
          "description": ""
      });
      console.log(response.data,'response.data');
      
      return response.data;
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
