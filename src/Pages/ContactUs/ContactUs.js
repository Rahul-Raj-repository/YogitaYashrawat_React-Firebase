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


            <Row className="firstinformation">

                <Col lg={3} xs={12} className="firstlocation contacticon">
                    <img src={locationfirsticon}></img>
                    <h5 className="textfirstlocation">Near Aashima Mall
                    Bhopal</h5>

                </Col>

                <Col lg={3} xs={12} className="secondtelephone contacticon">
                    <img className="img-fluid" src={telephonesecondicon}></img>
                    <h5 className="textfirstlocation"> +(11)123 4567<br/>
                    +(11)12345678
                    </h5>

                </Col>

                <Col lg={3} xs={12} className="thirdmail contacticon">
                    <img className="img-fluid" src={mailthirdicon}></img>
                    <h5 className="textfirstlocation" id="infoemail">info@propertyask.com<br/>
                    info@propertycheetah.com</h5>
                   

                </Col>

                <Col lg={1} xs={12}>
                    
                </Col>

            
            </Row>

            <div className="buypicimage">
                <br/>
                <h1>WE'D LOVE TO HEAR FROM YOU.<br></br>
                HERE'S HOW TO GET IN TOUCH.</h1>    
            </div>

            <div>
                <Row className="threeimages">
                    <Col lg={3} xs={12} className="generalenquiries images-three">
                        <img className="img-fluid" src={generalenquiries} height="300px"></img>
                        <h4> GENERAL ENQUERIES</h4>
                        <h6>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</h6>

                    </Col>
                    <Col lg={1} xs={12}>

                    </Col>

                        <Col lg={3} xs={12} className="emailalerts images-three">
                        <img className="img-fluid" src={emailalerts} height="300px"></img>
                        <h4> OUR OFFICES</h4>
                        <h6>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</h6>                        
                        </Col>

                        <Col lg={1} xs={12}>
                        
                    </Col>

                        <Col lg={3} xs={12} className="ouroffices images-three">
                        <img  className="img-fluid" src={ouroffices} height="300px"></img>
                        <h4> EMAIL ALERTS</h4>
                        <h6>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</h6>
                        </Col>

                        <Col lg={2} xs={12}>
                        
                        </Col>

                </Row>
            </div>

            <Contact/>
            <Footer/>
            
        </div>
    )
}export default ContactUS;
