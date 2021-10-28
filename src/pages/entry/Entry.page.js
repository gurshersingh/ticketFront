import React from 'react'
import './Entry.style.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Login } from '../../components/login/Login.component'
import { useState } from 'react'
import { ResetPassword } from '../../components/password-reset/PasswordRest.component'



export const Entry = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [frmLoad, setfrmLoad] = useState('login')
    
    const formswitch = (formtype) =>{
        setfrmLoad(formtype)
    }
    
    const handleOnChange =(e)=>{
    const {name, value} = e.target
   if (name==='email'? setEmail(value):setPass(value))
    console.log(name,value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(email)
    }
    return (
        <div className="entry-page bg-info">
        <Jumbotron className="form-box">
        
        {frmLoad==='login' && (<Login 
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            formswitch={formswitch}
            email={email}
            pass={pass}/>)}
        
        {frmLoad==='rest' && (<ResetPassword 
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        formswitch={formswitch}
        email={email}/>)}
        </Jumbotron>
            
        </div>
    )
}
