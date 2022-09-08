import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progress: 0,
    subMenu: []
}

export const menuSlice = createSlice({
    name: 'menuScrollProgress',
    initialState,
    reducers: {
        updateScrollProgress(state, action) {
            state.progress = action.payload;
        },
        setMenuItems(state, action) {
           state.subMenu.push(action.payload)
        }

    }
})


export const { updateScrollProgress, setMenuItems } = menuSlice.actions;

export default menuSlice.reducer;