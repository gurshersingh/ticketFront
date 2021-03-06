import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { isLogout } from "../../components/login/loginSlice";
import { useDispatch } from "react-redux";
//import {logout} from '../../api/userApi'


export const Header = () => {
  const history = useHistory();
  const dispatch=useDispatch()

  const logOut=()=>{
    //const removeJWT= await logout()
    //console.log(removeJWT)
    sessionStorage.removeItem('accessJWT')
    dispatch(isLogout())
    localStorage.removeItem('crmSite')
    history.push('/')
  }

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        CRM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
