import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/habitSlice';

// Configure and export the Redux store
const store = configureStore({
  reducer: {
    habits: habitReducer, // Add habit reducer to the store
  },
});

export default store;
