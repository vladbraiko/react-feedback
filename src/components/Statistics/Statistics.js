import React from "react";
import Proptypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}% </p>
    </>
  );
}

Statistics.propTypes = {
  good: Proptypes.number,
  neutral: Proptypes.number,
  bad: Proptypes.number,
  total: Proptypes.func,
  positivePercentage: Proptypes.func,
};

export default Statistics;
