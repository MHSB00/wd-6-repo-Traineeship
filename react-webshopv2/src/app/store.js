import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../Comp/Menu/menuSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
