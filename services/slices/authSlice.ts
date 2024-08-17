import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authThunks} from '../thunks/';
import { RootState } from '../../app/index';

const initialState: any = {
    loading: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(authThunks.pending, state => {
            state.loading = true;
        });
        builder.addCase(
            authThunks.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
            },
        );
        builder.addCase(
            authThunks.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            },
        );
    },
});


// export const changePasswordError = (state: RootState) => {
//     return state.changePassword.error;
// };

export const {} = authSlice.actions;
