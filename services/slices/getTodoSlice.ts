import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTodoThunks } from '../thunks';
import { RootState } from '../../app/index';

const initialState: any = {
    loading: false,
    error: null,
    respons:null,
};

export const getTodoSlice = createSlice({
    name: 'getTodoSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getTodoThunks.pending, state => {
            state.loading = true;
        });
        builder.addCase(
            getTodoThunks.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.respons = action.payload;
            },
        );
        builder.addCase(
            getTodoThunks.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            },
        );
    },
});


export const getTodo = (state: RootState) => {
    return state.getTodo.respons;
};

export const { } = getTodoSlice.actions;
