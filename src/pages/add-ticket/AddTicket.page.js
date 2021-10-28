import React from 'react'
import  {useState,useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AddTicketForm } from '../../components/addTicketForm/AddTicketForm.comp'
import { BreadCrum } from '../../components/login/bread-crum/BreadCrum.comp'
import { shortString } from '../../utils/validation'

export const AddTicket = () => {
    
       
        const initialFrmDataErr={
            subject:false,
            issueDate:false,
            detail:false,
        }
        const initialFrmData={
            subject:"",
            issueDate:"",
            detail:""
        }
        const [FrmData, setFrmData] = useState(initialFrmData)
        const [FrmDataErr, setFrmDataErr] = useState(initialFrmDataErr)
        useEffect(() => {
            
        }, [FrmDataErr])
        const handleOnChange =(e)=>{
            const {name, value} = e.target
           
            console.log(name,value)
            setFrmData({
                ...FrmData,
                [name]:value
            })
            }
            const handleSubmit =async(e)=>{
                e.preventDefault()
                const isValid = await shortString(FrmData.subject)
                //console.log(FrmDataErr)
                !isValid && setFrmDataErr (
                    {
                        ...initialFrmDataErr,
                        subject: isValid
                    }
                )
                isValid && setFrmDataErr (
                    {
                        ...initialFrmDataErr,
                        subject: isValid
                    }
                )
               const isValidText = await shortString(FrmData.detail)
                !isValidText && setFrmDataErr (
                    {
                        ...initialFrmDataErr,
                        detail: isValidText
                    }
                )
                isValidText && setFrmDataErr (
                    {
                        ...initialFrmDataErr,
                        detail: isValidText
                    }
                )
                //console.log(FrmDataErr)
            }
    return (
     <Container>
        <Row>
        <Col>
            <BreadCrum page="New Ticket"/>
        </Col>
        </Row>
        <Row>
        <Col>
            <AddTicketForm 
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit }
            FrmData={FrmData}
            FrmDataErr={FrmDataErr}
            />
        </Col>
        </Row>
        </Container>
    )
}
