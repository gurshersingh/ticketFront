import React from 'react'
import { Row, Col, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {filterSearchStr} from '../../pages/ticket-listing/ticketAction'

export const SearchForm = () => {
        const dispatch=useDispatch()
        const handleOnChange = e =>{
        const {value} = e.target
        dispatch(filterSearchStr(value))
    }
    return (
        <Form>
            <Form.Group as ={Row}>
                <Form.Label column sm={2}>Search </Form.Label>
                <Col sm={9}>
                    <Form.Control
                    name="searchStr"
                    placeholder="Search Here"
                    onChange={handleOnChange}
                    
                    />
   
                </Col>
            
            </Form.Group>
            
        </Form>
    )
}
