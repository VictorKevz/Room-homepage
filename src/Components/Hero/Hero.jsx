import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"
import data from "./Data";
import "./hero.css"
import backIcon from "../../assets/images/icon-angle-left.svg"
import forwardIcon from "../../assets/images/icon-angle-right.svg"
import arrowIcon from "../../assets/images/icon-arrow.svg"


function Hero() {
  const[currentIndex,setCurrentIndex] = useState(0)
  const{id,title,description,imgSrc,CTA} = data[currentIndex];

  const nextSlide = ()=>{
    setCurrentIndex((prevIndex)=>(prevIndex + 1) % data.length)
  }
  const prevSlide = ()=>{
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
  }
  return (
    <div className="hero-wrapper">
        <div className="hero-img-side">
        <Navbar/>
        <picture className="hero-img-wrapper">
        <source media="(max-width:400px)" srcSet={imgSrc.mobile} />
        <img src={imgSrc.desktop} alt={`Slide ${currentIndex}hero image`} className="hero-img" />
        </picture>
        <div className="buttons-container">
        <button className="btn" onClick={prevSlide}>
          <img src={backIcon} alt="back arrow icon" />
        </button>
        <button className="btn" onClick={nextSlide}>
          <img src={forwardIcon} alt="forward arrow icon" />
        </button>
      </div>
        </div>
     <aside className="hero-text-side">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <a className="hero-link">{CTA}
            <img src={arrowIcon} alt="arrow icon" className="arrow-icon"/>
        </a>
     </aside>

    </div>
  );
}

export default Hero;