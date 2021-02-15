import React from 'react'
import "./Contact.css"
import Contactform from './Contactform'
import{Row,Col}from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="bgcontact">
        <Row>
        <Col lg={12} xs={12}> 
        <br/>
            <h1 className="contact">DIRECTIONS</h1>
        </Col>
        </Row>

        <Row>

                    <div className="col-sm-6 map">
                    <div class="mapouter">
                     <div className="row d-flex justify-content-center">
                     <iframe width="548" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=The%20Cognate%20Minds,%20Indrapuri%20C%20sector,%20Sector%20C,%20Indrapuri,%20Bhopal,%20Madhya%20Pradesh&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                        </div> 
                    </div>                    
                            <div className="col-sm-6 add2">
                            <br/><br/>
                            <p><b><u>OFFICE</u>
                            <br/>
                            </b></p>
                            <p>
                                <b>The Cognate Minds, Sector C, Indrapuri, Bhopal, Madhya Pradesh 462022, India</b> 
                            </p>
                            <iframe width="548" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=The%20Cognate%20Minds,%20Indrapuri%20C%20sector,%20Sector%20C,%20Indrapuri,%20Bhopal,%20Madhya%20Pradesh&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                                        

                    
                </Row>



            </div>
            
    )
}
