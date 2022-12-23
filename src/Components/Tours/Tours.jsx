import React from "react";
import ToursItem from "./ToursItem";
import "./Tours.css";
const Tours = ({ toursList }) => {
  return (
    <div className="tours">
      {toursList.map((item) => (
        <ToursItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Tours;
