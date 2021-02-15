import React from 'react'
import "./footer.css"
import title from "../images/title.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
        <footer className="footer-section">
        <div className="container-fluid">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>The Cognate Minds, Sector C, Indrapuri, Bhopal, Madhya Pradesh 462022, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9826441915 / 9303979324</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>yogitarawat.motivationalguru@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="#"><img src={title} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Trained more than 40,000+ Individuals, 
                                Teachers, Students & Professionals. She 
                                is a Campaign Runner for BE POSITVE 
                                Program. She is an official Career 
                                Counselor to Dainik Bhaskar. Assigned to 
                                cover 12 States of India Since 2018. She is 
                                Mentor to Reserve Bank of India too.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/profile.php?id=100000761316049"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://twitter.com/YogitaYashRawa3"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://www.youtube.com/channel/UCm0md6BOY4vI_WWQQIKtPlQ"><i className="fab fa-youtube" style={{fontSize:30, color:"#FF0000"}}></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div classNameName="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/aboutus">About</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                                <li><Link to="/login">Instant Messaging</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

        </div>
    )
}

export default Footer
