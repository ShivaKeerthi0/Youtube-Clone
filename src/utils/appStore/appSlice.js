import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({

    name : 'app',
    initialState : {
        showMenu : true,
    },
    reducers : {
        toggleMenu : (state) => {
            state.showMenu = !state.showMenu
        },
        setMenu : (state,action) =>{
            state.showMenu = action.payload;
        }

    }

})

    
export const {toggleMenu, setMenu} = appSlice.actions;

export default appSlice.reducer