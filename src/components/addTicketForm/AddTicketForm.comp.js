import React from 'react'
import { Form, Jumbotron, Button, Row,Col } from 'react-bootstrap'
import './addTicketForm.style.css'

export const AddTicketForm = ({handleOnChange, handleSubmit,FrmData,FrmDataErr}) => {
    console.log(FrmDataErr)
    return (
        <Jumbotron className="add-new-ticket bg-light">
        <h1 className="text-info text-center">Add Ticket Form</h1>
        <hr/>
        <Form autoComplete= "off" onSubmit={handleSubmit}>
        <Form.Group as={Row}>
             <Form.Label column sm={3}>Subject</Form.Label>
                <Col>
                 <Form.Control 
                 name="subject"
                 value={FrmData.subject}
                 placeholder="Enter subject"
                 onChange={handleOnChange}
                 required />
                 <Form.Text>{!FrmDataErr.subject && "Subject is required"}</Form.Text>
                 </Col>
                </Form.Group>

                <Form.Group as={Row}>
             <Form.Label column sm={3}>Issue Date</Form.Label>
             <Col sm={9}>
                 <Form.Control 
                 type="date" 
                 name="issueDate"
                value={FrmData.issueDate}
                 onChange={handleOnChange}
                 required />
                 </Col>
                </Form.Group>
                <Form.Group as ={Row}>
             <Form.Label column sm={3}>Message</Form.Label>
             <Col sm={9}>
                 <Form.Control 
                 as="textarea" 
                 name="detail"
                 rows="5"
                value={FrmData.detail}
                 onChange={handleOnChange}
                 required />
                 <Form.Text>{!FrmDataErr.detail && "Detail is required"}</Form.Text>
                 </Col>
                </Form.Group>
                <Button type="submit" variant="info" block> Login</Button>
           </Form>
        </Jumbotron>)
}
