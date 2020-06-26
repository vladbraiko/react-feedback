import React from "react";
import Proptypes from "prop-types";

function FeedbackOptions({ options, onAddFeedback }) {
  const buttons = Object.keys(options).map((option) => {
    return (
      <button
        className="button"
        key={option}
        onClick={() => onAddFeedback(option)}
      >
        {option}
      </button>
    );
  });

  return <div className="buttons-container">{buttons}</div>;
}

FeedbackOptions.propTypes = {
  options: Proptypes.objectOf(Proptypes.number),
  onLeaveFeedback: Proptypes.func,
};

export default FeedbackOptions;
