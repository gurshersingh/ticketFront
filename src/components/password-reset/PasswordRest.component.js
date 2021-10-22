import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const ResetPassword = ({handleOnChange, formswitch,handleSubmit,email}) => {
    return (
        <Container>
        <Row>
        <Col>
        <h1 className="text-info text-center">Reset Password</h1>
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
                
                <Button type="submit"> Reset Password</Button>
           </Form>
        <hr/>
        </Col>
        </Row>
        <Row>
            < Col>
                <a   href="#!" onClick ={()=>formswitch('login')}>Login Now</a>
            </Col>
        </Row>
                    
        </Container>
    )
}
