import React from "react";
import Heading from "../common/Heading";
import InnerDiv from "../common/innerDiv/InnerDiv";
import "./index.scss";

const ThreeInOne = ({
  heading,
  mainImg,
  imgWidth,
  children,
  maxwidth,
  justify,
  innerjustify,
}) => {
  return (
    <div className="three-in-one__" style={{ justifyContent: `${justify}` }}>
      <Heading>{heading}</Heading>
      <InnerDiv maxwidth={maxwidth} justify={innerjustify}>
        <img src={mainImg} style={{ width: `${imgWidth}` }} alt="graphic" />
        {children}
      </InnerDiv>
    </div>
  );
};

export default ThreeInOne;
