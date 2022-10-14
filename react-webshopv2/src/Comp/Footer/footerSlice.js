import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    explore: [],
    service:[],
    company: [],
}

export const footerSlice = createSlice({
    name: 'footerSlice',
    initialState,
    reducers: {
        setFooterItemsExplore(state, action) {
        //console.log(action.payload);
           state.explore.push(action.payload);
        },
        setFooterItemsService(state, action) {
           state.service.push(action.payload);
        },
        setFooterItemsCompany(state, action) {
           state.company.push(action.payload);
        },
    }
})

export const {setFooterItemsExplore, setFooterItemsService, setFooterItemsCompany} = footerSlice.actions;

export default footerSlice.reducer;