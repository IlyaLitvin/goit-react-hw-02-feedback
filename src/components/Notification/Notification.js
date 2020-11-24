import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = function ({ message }) {
  return (
    <>
      <h2 className={styles.message}>{message}</h2>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
