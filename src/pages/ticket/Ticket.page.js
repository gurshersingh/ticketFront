import React, { useEffect, useState } from 'react'
import { Row, Col,  Container, Button} from 'react-bootstrap'
import { BreadCrum } from '../../components/login/bread-crum/BreadCrum.comp'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'
import tickets from './../../assets/data/dummy.json'
import { useParams } from "react-router-dom"

export const Ticket = () => {
    
    const {id} = useParams();
    //console.log(id);
   //const ticket=tickets[id-1]
   // console.log(ticket);
    const [textMsg, settextMsg] = useState("")
    const [loadtic, setloadtic] = useState("")
    useEffect(() => {
        for (let i = 0; i < tickets.length; i++) {
            if(id== tickets[i].id)
            {
                setloadtic(tickets[i])
                continue
            }
            
        }
    }, [textMsg],[id])

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
                
                <div className="subject">Subject : {loadtic.subject}</div>
                <div className="date">Date : {loadtic.date}</div>
                <div className="status">Status : {loadtic.status}</div>
                </Col>
                <Col className="text-right">
                <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <MessageHistory msg={loadtic.history}/>
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
