import axios from 'axios'

export const getAllTickets =()=>{
    return new Promise((resolve,reject)=>{
        try {
            const result = axios.get(
                'http://localhost:3001/v1/ticket/',
                {headers:{
                    Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgxZDVkMjk4MDk0ZWU5MWMzMDZhMDAiLCJlbWFpbCI6ImE0QGEuY29tIiwiaWF0IjoxNjM2OTUwOTM4LCJleHAiOjE2MzcwMzczMzh9.rVNxXy2Ep7wjvI-_qgnCZRmcF570tnxXxUzESy8ZX9k",
                }}
                )
            //console.log(result)
            resolve(result)
            //dispatch(fetchTicketSuccess(result.data))
    }
    catch (error) {
    
        reject(error)
    }

})
   
     
}

