import { configureStore } from '@reduxjs/toolkit';
import intervalReducer from './intervalSlice';

export default configureStore({
    reducer: {
        interval: intervalReducer,
    }
});