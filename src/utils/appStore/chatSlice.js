import { createSlice } from "@reduxjs/toolkit"
import {CHAT_LIMIT, CHAT_REMOVAL_VALUE} from '../constants'


const chatSlice = createSlice({

    name : 'chat',
    initialState : {

        messages : [ 

        ]
    },
    reducers :{

        addChatMessage : (state, action) =>{

            state.messages.slice(CHAT_LIMIT, CHAT_REMOVAL_VALUE)

            state.messages.unshift(action.payload);
        },

    }
})


export const {addChatMessage} = chatSlice.actions;
export default chatSlice.reducer