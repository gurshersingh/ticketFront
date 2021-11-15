import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ticket:[],
    isLoading:false,
    error:"",
    searchStrg:[]
}
const ticketListSlice = createSlice({
    name:"ticketList",
    initialState,
    reducers:{
        fetchTicketLoading:(state)=>{state.isLoading=true},
        fetchTicketSuccess:(state,action)=>{
            state.isLoading=false
            state.ticket=action.payload
            state.searchStrg=action.payload
        },
        fetchTicketError:(state,action)=>{
            state.error=action.payload
            state.isLoading=false
        },
        fetchSearchStr:(state,{payload})=>{
            //console.log(payload)
            state.searchStrg=state.ticket.filter((row)=>{
                if(!payload) return row
                return row.subject.toLowerCase().includes(payload.toLowerCase())

            })//.then((data=>console.log(data)))
            console.log(state.searchStrg)
        }
    }
})

const {reducer,actions}=ticketListSlice
export const {fetchTicketLoading,fetchTicketSuccess,fetchTicketError,fetchSearchStr}=actions

export default reducer
