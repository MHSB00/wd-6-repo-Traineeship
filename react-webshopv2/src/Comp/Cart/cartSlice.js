import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {       
            console.log(action.payload);
            const itemInCart = state.itemsInCart.find((item) => item.id === action.payload.id);
            if(itemInCart){
                itemInCart.amount++;
            }else{
                state.itemsInCart.push({...action.payload})
            }
        },
        removeFromCart(state, action){

        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;