import { configureStore, createReducer } from '@reduxjs/toolkit';
import menuReducer from '../Comp/Menu/menuSlice';
import footerReducer from '../Comp/Footer/footerSlice';
import signinReducer from '../Comp/SignIn/signinSlice';
import cartReducer from '../Comp/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    footer: footerReducer,
    signin: signinReducer,
    cart: cartReducer,
  },
});
