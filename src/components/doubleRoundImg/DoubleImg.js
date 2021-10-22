import React from "react";
import "./index.scss";

const DoubleImg = ({ maxwidth, imageOne, imageTwo }) => {
  return (
    <div className="double-img__" style={{ width: `${maxwidth}` }}>
      <div className="image-one">
        <img src={imageOne} alt="graphic" />
      </div>
      <div className="image-two">
        <img src={imageTwo} alt="graphic" />
      </div>
    </div>
  );
};

export default DoubleImg;
