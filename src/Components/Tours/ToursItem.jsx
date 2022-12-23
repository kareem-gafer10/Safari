import React from "react";
import Rating from "./Rating";

const ToursItem = ({ item }) => {
  return (
    <div className="tours-item">
      <img src={item.image} alt={item.title} className="tours-item-img" />
      <span className="tours-item-label">ADVENTURE</span>
      <div className="tours-item-body">
        <h2 className="tours-item-title">{item.title}</h2>
        <div className="tours-item-duration">
          <span>{item.duration} .Pickup available</span>
        </div>
        <Rating rating={item.rating} reviews={item.reviews} />
        <div className="tours-item-price">
          <strong>From ${item.priceFrom}</strong> <p>per person</p>
        </div>
        <button className="tours-item-link">See More</button>
      </div>
    </div>
  );
};

export default ToursItem;
