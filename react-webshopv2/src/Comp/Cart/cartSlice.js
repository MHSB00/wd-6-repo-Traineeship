import { createSlice
 } from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemInCart = state.itemsInCart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.amount++;
            } else {
                state.itemsInCart.push({ ...action.payload })
            }
        },
        removeFromCart(state, action) {
            const removeItem = state.itemsInCart.filter((item) => item.id !== action.payload.id);
            const itemInCart = state.itemsInCart.find((item) => item.id === action.payload.id);
            if (itemInCart.amount === 1) {
                state.itemsInCart = removeItem;
            } else {
                itemInCart.amount--;
            }
        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;