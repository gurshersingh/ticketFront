import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading:false,
    isUser:{},
    error:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loadUser:(state)=>{
            state.isLoading=true
            state.error=''
        },
        successUser:(state,{payload})=>{
            state.isLoading=false
            state.isUser=payload
            state.error=''
        },
        failUser:(state,{payload})=>{
            state.isLoading=false
            state.error=payload
        },

    }
})
const {reducer,actions} = userSlice
export const {loadUser,successUser,failUser} = actions
export default reducer