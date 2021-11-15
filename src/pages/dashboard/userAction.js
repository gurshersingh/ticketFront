import {loadUser,successUser,failUser} from './userSlice'
import {fetchUser} from '../../api/userApi'
export const getUserProfile =()=>async(dispatch)=>{
    try {
        dispatch(loadUser())
        const result = await fetchUser()
        dispatch(successUser(result))
        //console.log(result)


    } catch (error) {
        dispatch(failUser(error))
    }
}