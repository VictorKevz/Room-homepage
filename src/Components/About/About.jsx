import React, { useState } from "react";
import aboutDark from "../../assets/images/image-about-dark.jpg";
import aboutLight from "../../assets/images/image-about-light.jpg";
import "./about.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about img-left">
        <img src={aboutDark} alt="about dark image" className="dark-img" />
      </div>
      <article className="about text">
        <h2 className="about-title">ABOUT OUR FURNITURE</h2>
        <p className="about-parag">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <div className="about img-right">
        <img src={aboutLight} alt="about light image" className="light-img" />
      </div>
    </div>
  );
}

export default About;
