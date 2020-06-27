import React from "react";
import Proptypes from "prop-types";
import styles from "./Section.module.css";

function Section({ title, children }) {
  return (
    <div className={styles.sectionContainer}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.element.isRequired,
};

export default Section;
