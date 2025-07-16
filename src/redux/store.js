import { configureStore } from '@reduxjs/toolkit';
import sweetReducer from './sweetSlice';

export const store = configureStore({
  reducer: {
    sweetShop: sweetReducer,
  },
});
