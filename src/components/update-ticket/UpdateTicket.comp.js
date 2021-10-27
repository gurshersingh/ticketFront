import React from 'react'
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = ({handleOnSubmit,textMsg,handleOnChange}) => {
    //console.log({textMsg})
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply </Form.Text>
            <Form.Control
            name="detail"
            rows={5}
            value={textMsg}
            onChange={handleOnChange}
            as="textarea"
            />
            <div className="variant info text-right mt-3 mb-3">
            <Button variant="info" type="submit">Reply</Button>
            </div>
            
        </Form>
    )
}
