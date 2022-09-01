import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progress:0
}

export const menuSlice = createSlice({
    name: 'menuScrollProgress',
    initialState,
    reducers: {
        updateScrollProgress(state, action){
            state.progress = action.payload;
        }
    }
})


export const {updateScrollProgress} = menuSlice.actions;

export default menuSlice.reducer;