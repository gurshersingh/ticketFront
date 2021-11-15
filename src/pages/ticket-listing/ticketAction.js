import {fetchTicketLoading,fetchTicketSuccess,fetchTicketError,fetchSearchStr} from './ticketSlice'
import {getAllTickets} from '../../api/ticketApi'

export const  fetchAllTicket = () => async(dispatch) =>{
    dispatch(fetchTicketLoading())
    try {
        const result = await getAllTickets()
        console.log(result)
        dispatch(fetchTicketSuccess(result.data))
        
    } catch (error) {
        
        dispatch(fetchTicketError(error.message))
    }

}
 export const filterSearchStr = str => dispatch =>{
    //console.log(str)
     dispatch(fetchSearchStr(str))
 }