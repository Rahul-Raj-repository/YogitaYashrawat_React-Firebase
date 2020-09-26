import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import logo from "../images/logo.png"
import "../styles.css"
import {Link} from "react-router-dom"


function Base() {

    
    return (
      <div style={{borderBottom: "2px "}}>
        <Navbar className="nav bg-light fixed-top " expand="sm" style={{ boxShadow:"0px 6px 10px grey"}}>
        <Navbar.Brand>
            <Link to="/"><img src={logo} width="250" height="80" className="img-fluid d-inline-block align-top"/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-warning" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
           


          </Nav>
          <Link to="/login"><button className="btn btn-warning mr-3"><b>Login</b></button></Link>
          <Link to="/signup"><button className="btn btn-warning"><b>Signup</b></button></Link><br/>
        </Navbar.Collapse>
      </Navbar>
     
     </div>
    )
}

export default Base

