import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signedin: false,
    userEmail: '',
    accessToken: ''
}

export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        setSignedIn(state, action) {
            state.signedin = action.payload.signedin;
            state.userEmail = action.payload.userEmail;
            state.accessToken = action.payload.accessToken;
        },
    }
})


export const { setSignedIn } = signinSlice.actions;

export default signinSlice.reducer;