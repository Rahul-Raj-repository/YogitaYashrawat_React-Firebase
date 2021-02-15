import React from 'react';
import "./App.css"
import Footer from "../../Components/Footer"
import desktopImage from './Images/Maam.jpg';
import mobileImage from './Images/Maam.jpg';
import guru from "./Images/guru.png";
import vision from "./Images/vision.png";
import trainer from "./Images/trainer.png";
import Base from "../../Components/Base"
import Slider from './Slider';
     
const AboutUs = () => {
 const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
     
         return (
             <div> 
             <Base/>
                
             <div className="Appup">
             <h1 className="display-1">About</h1>
                 <div className="App " style={{backgroundImage: `url(${imageUrl})`, marginTop:"40px" }}>
                 
                 </div>
             </div>
     
             <div className="login-header mt-4">
                     <h2><b>Yogita Yash Rawat</b></h2>
                  </div>
                  <div className="row mt-5 text-center ">
                      <div className="col-sm-1"></div>
                      
                     <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#35f03e"}}>
                        <h1 className="mt-3 text-white"><b>GURUMAA </b></h1>
                        <h6 className="mt-3 text-white">The most Prolific Career Counselor & Life Coach of Central India. Lovingly, Children call her Guru Maa & fellow Colleagues call her Pied - Piper.</h6>
                        <img className="mt-5" src={guru} height="100px" width="230px" alt=""/>
                      </div>
     
                     <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#40a3f5"}}>
                      <h1 className="mt-3 text-white"><b>TRAINER</b></h1>
                      <h6 className="mt-3 text-white">She Trained more than 40000+ individuals, that includes Students, Teachers, School & College Heads/Principals, Corporates etc..</h6>
                      <img className="mt-5" src={trainer} height="150px" width="200px" alt=""/>
                    </div>
     
                    <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#ec3df5"}}>
                        <h1 className="mt-3 text-white"><b>VISION</b></h1>
                        <h6 className="mt-3 text-white">Her Vision is to bring Joy, Peace & Easy in People's Life. Her most popular programs includes Kalyanam Live & Be Positive Campaigns. She is regressively working on saving people from Suicide & Depression.</h6>
                        <img className="mt-3" src={vision} height="150px" width="200px" alt=""/>
                     </div>
     
             </div>
                <Slider/>
              <Footer/>
             </div>
         );
     };
     
export default AboutUs;