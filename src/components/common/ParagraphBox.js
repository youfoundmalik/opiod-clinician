import React from "react";
import "./index.scss";

const ParagraphBox = ({ children, altclass }) => {
  return <div className={`paragraph-box ${altclass}`}>{children}</div>;
};

export default ParagraphBox;
