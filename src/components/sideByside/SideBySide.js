import React from "react";
import "./index.scss";

const SidebySide = ({ altclass, sideOne, imageTwo }) => {
  return (
    <div className={`side-side__ ${altclass}`}>
      <div className="side-one">{sideOne}</div>
      <div className="side-two">
        <img src={imageTwo} alt="graphic" />
      </div>
    </div>
  );
};

export default SidebySide;
