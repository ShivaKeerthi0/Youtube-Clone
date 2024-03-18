import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'search',
    initialState : {

    },
    reducers :{
        addSuggestion : (state, action) => {

            state =  Object.assign(state, action.payload);
        },
    }
})


export const {addSuggestion} = searchSlice.actions;
export default searchSlice.reducer;
