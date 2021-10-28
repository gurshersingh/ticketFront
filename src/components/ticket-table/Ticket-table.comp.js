import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const TicketTable = ({tickets}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Open Date</th>
                </tr>
            </thead>
            <tbody >
            {tickets.length>0 ? tickets.map(row=> 
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                    <Link to ={`/ticket/${row.id}`}>
                    {row.subject}
                    </Link></td>
                    <td>{row.status}</td>
                    <td>{row.date}</td>
                </tr>):
                <tr >
                <td colSpan="4" className="text-center">
                  No Tickets 
                </td>
                   
                    
                </tr>}
                
            </tbody>
        </Table>
    )
}
