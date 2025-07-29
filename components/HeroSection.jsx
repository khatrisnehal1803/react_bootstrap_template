import React from "react";
import "./HeroSection.css";
import johnImg from "../assets/John.png"; 

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Hi, Hi, I'm John Deo.</h1>
        <p>
          A freelance Web developer from London. I convert custom web designs
         <br/> to bootstrap templates.
        </p>
        <p>I make YouTube videos and write Blog.</p>
        <button>I'M AVAILABLE</button>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
      <div className="hero-image">
        <img src={johnImg} alt="John Deo" />
      </div>
    </div>
  );
};

export default HeroSection;
