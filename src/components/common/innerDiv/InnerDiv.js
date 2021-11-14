import React from "react";
import "./index.scss";

const InnerDiv = ({ children, altclass }) => {
  return <div className={`inner-div_ ${altclass}`}>{children}</div>;
};

export default InnerDiv;
