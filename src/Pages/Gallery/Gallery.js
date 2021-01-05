import React from "react";
import "./gallery.scss"
import Base from "../../Components/Base"
import img1 from "./images/1.jpeg"
import img2 from "./images/2.jpeg"
import img3 from "./images/3.jpeg"
import img4 from "./images/4.jpeg"
import img5 from "./images/5.jpeg"
import img6 from "./images/6.jpeg"
import img7 from "./images/7.jpeg"
import img8 from "./images/8.jpeg"
import img9 from "./images/9.jpeg"
import img10 from "./images/10.jpeg"
import img11 from "./images/11.jpeg"
import img12 from "./images/12.jpeg"
import img13 from "./images/13.jpeg"
import img14 from "./images/14.jpeg"
import img15 from "./images/15.jpeg"
import img16 from "./images/16.jpeg"
import img17 from "./images/17.jpeg"

const imgUrls = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,
  img12,img13,img14,img15,img16,img17];

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div>
        <img className="img-fluid" src={src} key={src}/>
      </div>
    ) 
  }

  render() {
    return (
      <div className="gallery-container">
      <Base/>
        <h1 className="pt-5 text-secondary">Gallery</h1>
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
      </div>
    )
  }
}


export default Gallery;