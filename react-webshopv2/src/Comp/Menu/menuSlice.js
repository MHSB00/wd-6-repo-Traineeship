import { createSlice, CreateSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "../../features/counter/counterSlice";

const initialState = {
    progress:0
}

export const menuSlice = createSlice({
    name: 'menuProgress',
    initialState,
    reducers: {
        updateScrollProgress: (state, action) =>{
            state.push(action.payload);
        },
    }
})


export const {updateScrollProgress} = menuSlice.actions;

export default menuSlice.reducer;