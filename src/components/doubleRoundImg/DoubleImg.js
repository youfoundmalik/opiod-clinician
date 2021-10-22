import React from "react";
import "./index.scss";

const DoubleImg = ({ maxwidth, imageOne, imageTwo, linkOne, linkTwo }) => {
  return (
    <div className="double-img__" style={{ width: `${maxwidth}` }}>
      <div className="image-one">
        <a target="_blank" href={linkOne}>
          <img src={imageOne} alt="graphic" />
        </a>
      </div>
      <div className="image-two">
        <a target="_blank" href={linkTwo}>
          <img src={imageTwo} alt="graphic" />
        </a>
      </div>
    </div>
  );
};

export default DoubleImg;
