import React from "react";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
      <p>Positiv feedback:{positivePercentage}%</p>
    </>
  );
};

export default Statistic;
