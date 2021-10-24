import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
export const Header = () => {
    return (
        
        <Navbar collapseOnSelect
        variant="dark"
        bg="info" 
        expand="md"
        >
        <Navbar.Brand href="#home">CRM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Dasboard</Nav.Link>
            <Nav.Link href="#home">Tickets</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        
    )
}
