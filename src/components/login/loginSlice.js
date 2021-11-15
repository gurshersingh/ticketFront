import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    isAuth:false,
    error:""
}
const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        isPending:(state)=>{
            state.isLoading=true
            state.isAuth=false
            state.error=""
        },
        isSuccess:(state)=>{
            state.isLoading=false
            state.isAuth=true
            state.error=""
        },
        isFail:(state,{payload})=>{
            state.isLoading=false
            state.isAuth=false
            state.error=payload
        }
    }
})

const {reducer, actions} = loginSlice
export const {isPending,isSuccess,isFail} = actions

export default reducer