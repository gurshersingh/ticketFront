import React,{useState} from 'react'
import {Container, Row, Col, Form, Button, Spinner,Alert} from 'react-bootstrap'
import {isPending,isSuccess,isFail} from './loginSlice'
import { useDispatch,useSelector } from 'react-redux'
import { userLogin } from "../../api/userApi";
import { useHistory } from 'react-router-dom';
import { getUserProfile } from "../../pages/dashboard/userAction"


export const Login = ({ formswitch}) => {
    const dispatch=useDispatch()
    const history=useHistory()
    const{isLoading,error}=useSelector(state=>state.login)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    
    const handleOnChange =(e)=>{
    const {name, value} = e.target
   if (name==='email'? setEmail(value):setPass(value))
    
   console.log(name,value)
    }
    const handleSubmit =async(e)=>{
        e.preventDefault()
        if(!email||!pass){
            return alert("Fill up the complete form")}
        
        dispatch(isPending())

        try {
            const isAuth = await userLogin({email,password:pass})
            if(isAuth.status==="error")
            return dispatch(isFail(isAuth.message))
            if(isAuth.status==="success")
            {dispatch(isSuccess())
            dispatch(getUserProfile())
            history.push('/dashboard')
            }
            console.log(isAuth)
        } catch (error) {
            dispatch(isFail(error.message))
        }
    }
    return (
        <Container>
        <Row>
        <Col>
        <h1 className="text-info text-center">Client Login</h1>
        <hr/>
        {error &&<Alert variant="danger">{error}</Alert>}
        <Form autoComplete= "off" onSubmit={handleSubmit}>
        <Form.Group >
             <Form.Label>Email address</Form.Label>
                 <Form.Control 
                 type="email" 
                 name="email"
                 value={email}
                 placeholder="Enter email"
                 onChange={handleOnChange}
                 required />
                </Form.Group>
                <Form.Group >
             <Form.Label>Password</Form.Label>
                 <Form.Control 
                 type="password" 
                 name="password"
                 value={pass}
                 placeholder="Enter password"
                 onChange={handleOnChange}
                 required />
                </Form.Group>
                <Button type="submit"> Login</Button>
                {isLoading&&<Spinner variant="primary" animation="border"/>}
           </Form>
        <hr/>
        </Col>
        </Row>
        <Row>
            < Col>
                <a  href="#!" onClick ={()=>formswitch('rest')}>Forgot Password</a>
            </Col>
        </Row>
                    
        </Container>
    )
}
