import React from 'react'
import Footer from '../../Components/Footer';
import Contact from './contact';
import generalenquiries from './images/1 .1.jpg'
import emailalerts from './images/1.2.jpg'
import ouroffices from './images/1.3.jpg'
import contactback from "./images/contactus.jpg"
import locationfirsticon from './images/location.png'
import telephonesecondicon from './images/phone.png';
import mailthirdicon from './images/mail.png';
import Base from "../../Components/Base"

import {
    Row,
    Col
  }from 'react-bootstrap';
  

 function ContactUS() {
    return (
        <div>
            <Base/>
                <img className="img-fluid mt-5 pt-4 pb-4" src={contactback} alt="contact" height="154px" width="100%"/>


            <div className="row pl-5">
                <div className="col-sm-4">
                    <img className="pl-5" src={locationfirsticon}></img>
                    <h6 className="textfirstlocation">The Cognate Minds, Sector C, Indrapuri, Bhopal, Madhya Pradesh 462022, India</h6>
                    <br/>
                </div>

                <div className="col-sm-4 ">
                    <img className="pl-5 img-fluid" src={telephonesecondicon}></img>
                    <h6 className="textfirstlocation"> 9826441915<br/>
                    9303979324
                    </h6><br/>
                </div>

                <div className="col-sm-4 ">
                    <img className="pl-5 img-fluid" src={mailthirdicon}></img>
                    <p className="textfirstlocation" id="infoemail">yogitarawat.motivationalguru<br/>@gmail.com</p>
                    <br/>
                    </div>

                <Col lg={1} xs={12}>
                    
                </Col>
            </div>

            <div className="buypicimage">
                <br/>
                <h1>WE'D LOVE TO HEAR FROM YOU.<br></br>
                HERE'S HOW TO GET IN TOUCH.</h1>    
            </div>

            <Contact/>
            <Footer/>
            
        </div>
    )
}export default ContactUS;
