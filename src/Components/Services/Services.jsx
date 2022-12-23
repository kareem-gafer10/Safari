import React from "react";
import { BsImage, BsBuilding, BsGlobe } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      <div className="service-item">
        <BsImage className="service-icon" />
        Adventures
      </div>
      <div className="service-item">
        <FaUserFriends className="service-icon" />
        Family tours
      </div>
      <div className="service-item">
        <BsBuilding className="service-icon" />
        City cards
      </div>
      <div className="service-item">
        <BsGlobe className="service-icon" />
        Multy-day trips
      </div>
    </div>
  );
};

export default Services;
