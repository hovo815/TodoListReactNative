import {configureStore} from '@reduxjs/toolkit';
import {
    getTodoSlice,
    authSlice,
} from '../services';


export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        getTodo: getTodoSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
