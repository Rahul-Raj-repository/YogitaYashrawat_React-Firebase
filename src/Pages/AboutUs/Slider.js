import React, { Component } from 'react'
import "./App.css"
import $ from 'jquery';
import 'slick-carousel';
import s1 from "./Images/s1.jpeg"
import s2 from "./Images/s2.jpeg"
import s3 from "./Images/s3.jpeg"
import s4 from "./Images/s4.jpeg"

class Slider extends Component {
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
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={s1}/> </div>
                <div className="card-body">
                    <h3 className="card-title"><b>State Women Achiever Award 2019</b></h3>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={s2}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Regular Columnist with Dainik Bhaskar Help Desk of Rajasthan, Delhi & Jharkhand</b></h5>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={s3}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Yogita Yash Rawat's Social Endeavor, Free Career Counseling for All. Every Saturday she is Live on FB for answering questions of the youngsters, children & individuals.</b></h5>
                </div>
            </div>
            <div className="card">
                <div className="media media-2x1 gd-primary"> <img className="profile-image" src={s4}/> </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Yogita Yash Rawat @ RBI</b></h5>
                </div>
            </div>
        </div>
        )
    }
}

export default Slider;