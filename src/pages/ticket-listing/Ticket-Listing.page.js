import React, {useState, useEffect}from 'react'
import {Container, Row, Col,  Button} from 'react-bootstrap'
import { BreadCrum } from '../../components/login/bread-crum/BreadCrum.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/Ticket-table.comp'
//import tickets from '../../assets/data/dummy.json'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { fetchAllTicket } from '../ticket-listing/ticketAction'

export const TicketListing = () => {
    const dispatch = useDispatch()
    const [str, setstr] = useState("")
    
    useEffect(() => {
        dispatch(fetchAllTicket())
    }, [str,dispatch])

    return (
        <Container>
            <Row>
                <Col>
                <BreadCrum page="New Ticket"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <Link to ="/addticket">
                <Button variant="info">Add Ticket</Button>
                </Link>
                </Col>
                <Col className="text-right">
                    <SearchForm/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <TicketTable />
                </Col>
            </Row>
            
        </Container>
    )
}
