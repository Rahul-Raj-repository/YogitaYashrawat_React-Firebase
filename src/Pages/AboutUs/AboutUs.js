import React from 'react'
import './About.css';
import maamimage from './maam.png';
import Base from "../../Components/Base"

export default function AboutUs() {
    return (
    <div>
     <Base/>
        <div className="image"></div>
        <div className="container-fluid maamimage">

        <div className="row">

            
            <div className="col-sm-4 mamImage">
                <img className="img-fluid" src={maamimage} height="500px"></img>
            </div>
            <div className="col-sm-5 intro">
            <h2>HI, I’M Yogita Yash Rawat</h2>
            <p>“ Believe in yourself! Have faith in your abilities! Without a humble but <br/>reasonable confidence in your own powers you cannot be successful or <br/>happy. ”<br/><br/>
Vivamus ac purus pharetra, laoreet libero eu, pellentesque purus. Nam lobortis<br/> odio vitae ex egestas, et volutpat justo ultrices. Cum sociis natoque penatibus et<br/> magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ante nisi, element<br/>um vel rutrum eu</p>
            
            </div>
        </div>

    </div>


    <div className="secondpara">
        <div className="row personalQualities">

        <div className="col-sm-8 content">
        <h2 className="heading">PERSONALITY QUALITIES</h2>
        
        <p className="contentPara"> Suspendisse lorem orci, condimentum et pharetra ut, luctus in metus. Aenean at vehicula <br/>risus, non feugiat ante. Curabitur magna leo, finibus a leo ac, euismod placerat dui. Curabitur <br/>odio lacus, pharetra eu turpis vitae, dignissim cursus lectus. Morbi id sapien vel ex posuere <br/>congue vitae cursus nulla. Donec pretium rhoncus bibendum. Vivamus tempor est vel<br/> finibus tempor.
        </p>
        <br/>

        <p className="p2">Aliquam in neque eget tellus vestibulum feugiat.</p>
        <p className="p2">Aliquam in neque eget tellus vestibulum feugiat.</p>
        <p className="p2">Aliquam in neque eget tellus vestibulum feugiat.</p>
        <p className="p2">Aliquam in neque eget tellus vestibulum feugiat.</p>
        </div>


        <div className="col-sm-2 plugins">
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
        

        </div>

        <div className="col-sm-1 plugins2">
           <b></b> 
            Placed More Than 40,000 Individual Students.
            <br></br>

            <b></b> Trained Mored Than 20,000 Teachers.
            <br/>
            
        </div>
        <div className="col-sm-1 plugins3">
        </div>

        </div>
    </div>


    <div className="thirdpara">
    <div className="row dbInfo">
    
    

    </div>


    </div>
</div>

        
    )
}
