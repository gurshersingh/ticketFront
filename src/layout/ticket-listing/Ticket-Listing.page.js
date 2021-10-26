import React, {useState, useEffect}from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { BreadCrum } from '../../components/login/bread-crum/BreadCrum.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/Ticket-table.comp'
import tickets from './../../assets/data/dummy.json'

export const TicketListing = () => {
    const [str, setstr] = useState("")
    const [dispTics, setdispTics] = useState(tickets)
    useEffect(() => {
        
    }, [str,dispTics])
    const handleOnChange=(e)=>{
        //console.log(e.taget)
        setstr(e.target.value)
        searchTic(e.target.value)
    }
    const searchTic = (sttr)=>{
        const displayTics = tickets.filter(row=> row.subject.toLowerCase().includes(sttr.toLowerCase()))
        console.log(displayTics)
        setdispTics(displayTics)
    }
    return (
        <Container>
            <Row>
                <Col>
                <BreadCrum page="New Ticket"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <Button variant="info">Add Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm
                    handleOnChange={handleOnChange}
                    str={str}/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <TicketTable tickets={dispTics}/>
                </Col>
            </Row>
            
        </Container>
    )
}
