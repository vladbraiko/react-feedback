import React from "react";
import Proptypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onAddFeedback }) {
  const buttons = Object.keys(options).map((option) => {
    return (
      <button
        className={styles.button}
        key={option}
        onClick={() => onAddFeedback(option)}
      >
        {option}
      </button>
    );
  });

  return <>{buttons}</>;
}

FeedbackOptions.propTypes = {
  options: Proptypes.objectOf(Proptypes.number),
  onLeaveFeedback: Proptypes.func,
};

export default FeedbackOptions;
