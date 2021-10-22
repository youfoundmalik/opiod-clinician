import React from "react";
import "./index.scss";

const InnerDiv = ({ maxwidth, justify, children }) => {
  return (
    <div
      className="inner-div_"
      style={{ width: `${maxwidth}`, justifyItems: `${justify}` }}
    >
      {children}
    </div>
  );
};

export default InnerDiv;
