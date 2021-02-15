import React, { Component } from 'react'
import "./testimonial.css"
import $ from 'jquery';
import 'slick-carousel';

import t1 from "./images/1.jpeg"
import t2 from "./images/2.jpeg"
import t3 from "./images/3.jpeg"
import t4 from "./images/4.jpeg"
import t5 from "./images/5.jpeg"
import t6 from "./images/6.jpeg"
import t7 from "./images/7.jpeg"
import t8 from "./images/8.jpeg"
import t9 from "./images/9.jpeg"
import t10 from "./images/10.jpeg"
import t11 from "./images/11.jpeg"
import t12 from "./images/12.jpeg"
import t13 from "./images/13.jpeg"
import t14 from "./images/14.jpeg"
import t15 from "./images/15.jpeg"
import t16 from "./images/16.jpeg"
import t17 from "./images/17.jpeg"
import t18 from "./images/18.jpeg"
import t19 from "./images/19.jpeg"
import t20 from "./images/20.jpeg"

export class Testimonial1 extends Component {

    componentDidMount(){
        $(document).ready(function(){

            $('.items').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
            
            ]
            });
            });
    }

    render() {
        return (     
        <div className="items">
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t1}/> </div>
                <div className="card-body">
                    <h3 className="card-title"><b>Ankit Rai</b></h3>
                    <p className="card-text">COGNIZANT, Abu Dhabi</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t2}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Sameer Anant</b></h5>
                    <p className="card-text">Monitou South Asia</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t3}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Pravesh Joshi</b></h5>
                    <p className="card-text">Indian Oil Corp</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t4}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Vinod Sahu</b></h5>
                    <p className="card-text">YouTuber & Cadila Pharmacy</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t5}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Marina Philip Raju</b></h5>
                    <p className="card-text">Micro Lab Ltd</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t6}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Shreya Tiwari</b></h5>
                    <p className="card-text">COGNIZANT</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t7}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Chanchal Malviya</b></h5>
                    <p className="card-text">TCS</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t8}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Amol Yadav</b></h5>
                    <p className="card-text">Pfizer</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t9}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Sujeet Vishwakarma</b></h5>
                    <p className="card-text">Chef , Six Sense Lamba, Singapore</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t10}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Arun Kumar Gupta</b></h5>
                    <p className="card-text">Disney Hotstar</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t11}/> </div>
                <div className="card-body">
                    <h3 className="card-title"><b>Imran Khan</b></h3>
                    <p className="card-text">You Tuber, World Record Holder & Entertainer</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t12}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Aditya Rajak</b></h5>
                    <p className="card-text">INFOSYS</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t13}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Rishi Tamarkar</b></h5>
                    <p className="card-text">TCS</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t14}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Avinash Jain</b></h5>
                    <p className="card-text">INFOSYS</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t15}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Amol Rai</b></h5>
                    <p className="card-text">Ernst & Young</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t16}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Itu Shree Debnath</b></h5>
                    <p className="card-text">Lupin Laboratory</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t17}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Saurabh Khadse</b></h5>
                    <p className="card-text">Deloitte, US</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t18}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Reshu Rajput</b></h5>
                    <p className="card-text">Sapient</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t19}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Rajeev Gambhir</b></h5>
                    <p className="card-text">Charter Communicatio St. Louis, US</p>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={t20}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Sanjay Verma</b></h5>
                    <p className="card-text">SI, M.P POLICE, SPECIAL TASK FORCE</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Testimonial1
