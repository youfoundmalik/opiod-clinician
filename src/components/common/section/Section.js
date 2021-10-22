import React from "react";
import "./index.scss"

const Section = ({ id, children }) => {
  return (
    <section className="content" id={id}>
      {children}
    </section>
  );
};

export default Section;
