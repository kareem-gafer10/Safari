import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="search">
        <div className="input-wrapper">
          <BsSearch size={21} />
          <input type="text" placeholder="What are you looking for ?" />
        </div>
          <button className="btn-search">Search</button>
      </div>
      <div className="hero-title">
        <h3>Dubai</h3>
        <h1>Desert Safaris</h1>
      </div>
    </div>
  );
};

export default Hero;
