import React from 'react'
import Base from '../../Components/Base'
import "../../styles.css"
import Footer from '../../Components/Footer'
import Clients from '../OurClients/Clients'
import maam from "../../images/maam.png"
import title from "../../images/title.png"
import chatsnap from "../../images/chatsnap.png"
import {Link} from "react-router-dom"

function Home() {
    return (
    <div>
        <Base/>
        <div class="container hero">
        <div class="container-fluid inner">
            <div class="row pt-5">
            <div class="col-sm-6 px-5 py-5">
              <h2 className="text-secondary"><b>\"SAFALTA MILTI NAHI HAI, USE RACHNA PADTA HAI"</b></h2>
               <button className="btn btn-primary">Learn more</button>
               <div className="col-sm-2 "></div>
                <div className="col-sm-10 float-right mt-5">
                  <img className="img-fluid" src={title}></img>
                </div>
            </div>
            <div className="col-sm-1 "></div>
            <div className="col-sm-4 ">
              <img className="img-fluid mb-3" src={maam} height="500px" ></img>
            </div>
           
        </div>
        <div class="hero-back"></div>
        </div>
        </div>

        <div className="container">
        <div className="container-fluid bg-grey">
        <div className="row flex-wrapper">
        <div className="col-xs-4 single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart orange">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="100, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="15.35" class="percentage">2100+</text>
            <text x="18" y="21.35" class="percentage">Placed</text>
            <text x="18" y="25.35" class="percentage">Students</text>
          </svg>
        </div>
        
        <div className="col-xs-4 single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart green">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="100, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="16.35" class="percentage">1000+</text>
            <text x="18" y="21.35" class="percentage">Seminars</text>
          </svg>
        </div>
      
        <div className="col-xs-4 single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart blue">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="100, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="16.35" class="percentage">500+</text>
            <text x="18" y="21.35" class="percentage">Subscribers</text>
          </svg>
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-md-6 bg-dark rounded">
          <h3 className="text-light mx-3 mt-5"><b>Have any life or career related questions?</b></h3>
          <h3 className="text-warning mx-3 mt-3"><b>Ask the experts</b></h3>
          <h4 className="text-light mx-3 mt-3">Feel Free to check out our Instant messaging feature...</h4>
          <div className="mt-3 mb-2 d-flex justify-content-center">
            <Link to="/login"><button className="btn btn-primary mr-3"><b>LOGIN IN</b></button></Link>
          </div>
          <p className="mb-3 mt-2 d-flex justify-content-center text-light"> New user? 
             <Link className="text-primary" to="/signup"><u> Create an account</u></Link>
          </p>
        </div>
        <div className="col-md-6 bg-light rounded">
          <img className="img-fluid mt-3" src={chatsnap}/>
        </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
       <h2 className="text-dark ">Latest Videos </h2></div>
      <div className="row d-flex justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLVVHzeasSDCuDN4VZAyF8evpFyNW1iAlF" frameborder="0" 
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <Clients/>
    </div>
        <Footer/>
    </div>
    )
}

export default Home
