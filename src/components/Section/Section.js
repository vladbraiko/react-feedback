import React from "react";
import Proptypes from "prop-types";

function Section({ title, children }) {
  return (
    <div className="section-container">
      <h2>{title}</h2>
      <div className="children-container">{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.element.isRequired,
};

export default Section;
