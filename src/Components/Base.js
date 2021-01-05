import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import logo from "../images/logo.png"
import "../styles.css"
import {Link} from "react-router-dom"


function Base() {

    
    return (
      <div style={{borderBottom: "2px"}}>
        <Navbar className="nav bg-light fixed-top " expand="sm" style={{ boxShadow:"0px 6px 10px grey"}}>
        <Navbar.Brand>
            <Link to="/"><img src={logo} width="250" height="90" className="img-fluid d-inline-block align-top"/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-warning" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            <li class="nav-item mr-4">
              <Link to="/aboutus" className="text-secondary"><h6>About</h6> </Link>
            </li>
            <li class="nav-item mr-4">
              <Link to="/gallery" className="text-secondary"><h6>Gallery</h6> </Link>
            </li>
            <li class="nav-item mr-5">
              <Link to="/contactus" className="text-secondary"><h6>Contact Us</h6> </Link>
            </li>
          </Nav>
          <Link to="/login"><button className="btn btn-warning mr-3"><b>Login</b></button></Link>
          <Link to="/signup"><button className="btn btn-warning"><b>Signup</b></button></Link><br/>
        </Navbar.Collapse>
      </Navbar>
     
     </div>
    )
}

export default Base

