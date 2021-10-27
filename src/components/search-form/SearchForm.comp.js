import React from 'react'
import { Row, Col, Form} from 'react-bootstrap'

export const SearchForm = ({handleOnChange, str}) => {
    console.log(str)
    return (
        <Form>
            <Form.Group as ={Row}>
                <Form.Label column sm={2}>Search </Form.Label>
                <Col sm={9}>
                    <Form.Control
                    name="searchStr"
                    placeholder="Search Here"
                    onChange={handleOnChange}
                    value={str}
                    />
   
                </Col>
            
            </Form.Group>
            
        </Form>
    )
}
