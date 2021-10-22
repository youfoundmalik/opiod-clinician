import React from "react";
import './index.scss'

const ParagraphBox = ({ children, size, spacing, background, align }) => {
  return (
    <div
      className="paragraph-box"
      style={{ width: `${size}`, padding: `${spacing}`, backgroundColor: `${background}`, textAlign: `${align}` }}
    >
      {children}
    </div>
  );
};

export default ParagraphBox;
