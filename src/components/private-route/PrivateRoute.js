import React,{useEffect} from "react"
import { Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { useSelector,useDispatch } from "react-redux";
import { isSuccess } from "../login/loginSlice";
import { fetchNewAccessJWT } from "../../api/userApi";

export const PrivateRoute=({children, ...rest})=>{
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state=>state.login)
    useEffect(() => {
        const updateAccessJWT = async()=>{
            const result  =  await fetchNewAccessJWT();
            result && dispatch(isSuccess())
        }
        updateAccessJWT();
        (!isAuth && sessionStorage.getItem('accessJWT')) && dispatch(isSuccess())
    }, [isAuth,dispatch])
    return(<Route 
        {...rest}
        render={()=>(isAuth?<DefaultLayout >{children}</DefaultLayout>:<Redirect to 
        ="/"/>)}/> )   
          
}