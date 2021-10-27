import React, { useEffect, useState } from 'react'
import { Row, Col,  Container, Button} from 'react-bootstrap'
import { BreadCrum } from '../../components/login/bread-crum/BreadCrum.comp'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'
import tickets from './../../assets/data/dummy.json'


export const Ticket = () => {
    const ticket=tickets[0]
    const [textMsg, settextMsg] = useState("")
    useEffect(() => {
        
    }, [textMsg])

    const handleOnChange=(e)=>{
        settextMsg(e.target.value)
        //console.log(e.target.value)
        //console.log(textMsg)
    }
    const handleOnSubmit =()=>{
        alert('form submitted')
    }
    return (
        <Container>
            <Row>
                <Col>
                <BreadCrum page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="font-weight-bolder text-secondary">
                <div className="subject">Subject : {ticket.subject}</div>
                <div className="date">Date : {ticket.date}</div>
                <div className="status">Status : {ticket.status}</div>
                </Col>
                <Col className="text-right">
                <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <MessageHistory msg={ticket.history}/>
                <UpdateTicket 
                textMsg={textMsg}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                />
                </Col>
            </Row>
           
        </Container>
    )
}
