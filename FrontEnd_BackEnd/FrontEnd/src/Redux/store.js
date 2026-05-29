import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice';
const store = configureStore({
    reducer: {
        Counter : counterReducer,
    },
});

export default store

