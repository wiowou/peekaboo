import { createSlice } from '@reduxjs/toolkit';

export const intervalSlice = createSlice({
    name: 'interval',
    initialState: {
        value: 1000,
    },
    reducers: {
        updateInterval: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { updateInterval } = intervalSlice.actions;

export default intervalSlice.reducer;