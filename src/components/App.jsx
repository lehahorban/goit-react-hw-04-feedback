import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = options => {
    if (options === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (options === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (options === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = total => {
    total = countTotalFeedback();
    const positiveFeedback = (good / total) * 100;
    return Math.round(positiveFeedback);
  };

  countPositiveFeedbackPercentage();
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  const objectKeys = Object.keys({ good, neutral, bad });

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={objectKeys}
          onLeaveFeedback={onLeaveFeedback}
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

export default App;
