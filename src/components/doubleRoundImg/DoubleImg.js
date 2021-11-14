import React from "react";
import "./index.scss";

const DoubleImg = ({ altclass, imageOne, imageTwo, linkOne, linkTwo }) => {
  return (
    <div className={`double-img__ ${altclass}`}>
      <div className="image-one">
        <a target="_blank" rel="noreferrer" href={linkOne}>
          <img src={imageOne} alt="graphic" />
        </a>
      </div>
      <div className="image-two">
        <a target="_blank" rel="noreferrer" href={linkTwo}>
          <img src={imageTwo} alt="graphic" />
        </a>
      </div>
    </div>
  );
};

export default DoubleImg;
