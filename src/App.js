import React, { Component } from "react";
import Section from "./components/Section/Section.js";
import FeedbackOption from "./components/FeedbackOptions/FeedbackOptions.js";
import Statistic from "./components/Statistic/Statistic.js";
import Notification from "./components/Notification/Notification.js";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  toSetState = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback = function () {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = function () {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    let total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption onLeaveFeedback={this.toSetState} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section>
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
