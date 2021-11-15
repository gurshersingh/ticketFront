import React from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const TicketTable = () => {
    const {isLoading,searchStrg,error}=useSelector(state=>state.tickets)
    if(isLoading) return <h3>Loading... </h3>
    if(error) return <h3>{error}</h3>
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
            {searchStrg.length>0 ? searchStrg.map(row=> 
                <tr key={row._id}>
                    <td>{row._id}</td>
                    <td>
                    <Link to ={`/ticket/${row._id}`}>
                    {row.subject}
                    </Link></td>
                    <td>{row.status}</td>
                    <td>{row.openAt}</td>
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
