import React from 'react'
import { Table } from 'react-bootstrap'

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
            {tickets.length>5 ? tickets.map(row=> 
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.subject}</td>
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
