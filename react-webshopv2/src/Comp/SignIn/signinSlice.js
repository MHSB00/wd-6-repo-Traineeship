import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signin: false,
}

export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        setSignIn(state, action) {
            state.signin = action.payload;
        },

    }
})


export const { setSignIn } = signinSlice.actions;

export default signinSlice.reducer;