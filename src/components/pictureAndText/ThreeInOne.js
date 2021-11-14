import React from "react";
import Heading from "../common/Heading";
import InnerDiv from "../common/innerDiv/InnerDiv";
import "./index.scss";

const ThreeInOne = ({ heading, mainImg, children, altclass }) => {
  return (
    <div className={`three-in-one__ ${altclass}`}>
      <Heading>{heading}</Heading>
      <InnerDiv altclass="three-in-one__inner">
        <img src={mainImg} className="three-in-one__img" alt="graphic" />
        {children}
      </InnerDiv>
    </div>
  );
};

export default ThreeInOne;
