import React from 'react'
import {Container, Row, Col,  Button} from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/Ticket-table.comp'
import tickets from '../../assets/data/dummy.json'
import { BreadCrum } from '../../components/login/bread-crum/BreadCrum.comp'

import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <Container>
        <Row>
                <Col >
                    <BreadCrum page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-3 mb-2">
                <Link to ="/addticket">
                    <Button variant="info" 
                    style={{"fontSize" : "2rem", "padding": "10px 30px"}}> 
                    Add New Ticket
                    </Button>
                </Link>    
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                   <div>
                    Total Tickets
                   </div>
                   <div>
                    Pending Tickets
                   </div>
                   
                </Col>
            </Row>
            <Row>
                <Col className=" mb-2">
                <div>
                Recently added Tickets
               </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="recent-ticket">
                <div>
                <TicketTable
                tickets={tickets}/>
               </div>
                </Col>
            </Row>
            
            
        </Container>
    )
}
