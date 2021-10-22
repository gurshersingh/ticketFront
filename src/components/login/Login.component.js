import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const Login = ({handleOnChange, formswitch,handleSubmit,email, pass}) => {
    return (
        <Container>
        <Row>
        <Col>
        <h1 className="text-info text-center">Client Login</h1>
        <hr/>
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
