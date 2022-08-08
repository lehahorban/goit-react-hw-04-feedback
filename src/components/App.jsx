import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    total = this.countTotalFeedback();
    const positiveFeedback = (good / total) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const objectKeys = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objectKeys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}

export default App;
