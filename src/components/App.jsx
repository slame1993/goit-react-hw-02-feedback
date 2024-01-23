import { Feedback } from './Feedback/Feedback';
import React, { Component } from 'react';
import { Statistics } from './Statitistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    return this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  countTotalFeedback() {
    const values = Object.values({ ...this.state });

    const total = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(1);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const percentPositive = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <Feedback options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={percentPositive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
