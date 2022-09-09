import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../Comp/Menu/menuSlice';
import footerReducer from '../Comp/Footer/footerSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    footer: footerReducer
  },
});
