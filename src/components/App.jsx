import React, { Component } from 'react';
import FeedbackChoices from './FeedbackChoices';
import Stats from './Stats';
import Title from './Title';
import Notification from './Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Metoda do obsługi kliknięć
  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  // Pomocnicze metody
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Title title="Please leave feedback">
          <FeedbackChoices
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Title>
        <Title title="Statistics">
          {totalFeedback > 0 ? (
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Title>
      </div>
    );
  }
}

export default App;