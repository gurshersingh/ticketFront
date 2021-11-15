import React from 'react'
import './Entry.style.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Login } from '../../components/login/Login.component'
import { useState } from 'react'
import { ResetPassword } from '../../components/password-reset/PasswordRest.component'



export const Entry = () => {
    const [frmLoad, setfrmLoad] = useState('login')
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        //console.log(email)
    }
    const formswitch = (formtype) =>{
        setfrmLoad(formtype)
    }
    return (
        <div className="entry-page bg-info">
        <Jumbotron className="form-box">
        
        {frmLoad==='login' && (<Login 
            formswitch={formswitch}/>)}
        
        {frmLoad==='rest' && (<ResetPassword 
        //handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        formswitch={formswitch}
        //email={email}
        />)}
        </Jumbotron>
            
        </div>
    )
}
