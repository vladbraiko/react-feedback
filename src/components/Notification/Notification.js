import React from "react";
import Proptypes from "prop-types";

function Notification({ message }) {
  return (
    <>
      <span>{message}</span>
    </>
  );
}

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};

export default Notification;
