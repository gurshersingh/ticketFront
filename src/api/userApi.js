import axios from "axios"

const rootURL='http://localhost:3001/v1/user'
const loginUrl=rootURL+'/login'
const logoutUrl=rootURL+'/logout'
//const getUserUrl=rootURL

export const userLogin = formObj=>{
    console.log(formObj)
    return new Promise(async(resolve,reject)=>{
        try {
            const result = await axios.post(loginUrl,formObj)

            resolve(result.data)
            //console.log(result.data)
            if(result.data.status==="success"){
                sessionStorage.setItem('accessJWT',result.data.AJWT)
                localStorage.setItem('crmSite',JSON.stringify({refreshJWT:result.data.RJWT}))
            }

        } catch (error) {
            reject(error)
        }
    })
}

export const fetchUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const accessJWT=sessionStorage.getItem('accessJWT')
            if(!accessJWT){
                reject("Token not found")
            }
            //console.log(accessJWT)
            const result = await axios.get(loginUrl,{headers:{
                Authorization:accessJWT,
            }})
            //console.log(result)
            //const {_id,name,email}=result.data.user
            resolve(result.data.user)
            

        } catch (error) {
            reject(error)
        }
    })
}
export const logout = async() =>{
    try {
        await axios.delete(logoutUrl,{headers:{
            Authorization:sessionStorage.getItem('accessJWT')
        }})
    } catch (error) {
        console.log(error)
    }
}