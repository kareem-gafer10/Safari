import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./SortInput.css";
const SortInput = ({ toursLength, setSortItem, sortItem }) => {
  return (
    <div className="sort-input">
      <div className="avalible-tours">
        {toursLength} Tours Found
        <AiOutlineInfoCircle style={{ marginLeft: "5px" }} />
      </div>

      <select onChange={(e) => setSortItem(e.target.value)} value={sortItem}>
        <option value="recomended">Recomended</option>
        <option value="low">Price - Low to high</option>
        <option value="high">Price - High to low</option>
      </select>
    </div>
  );
};

export default SortInput;
