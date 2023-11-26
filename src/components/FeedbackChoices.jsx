import React from 'react';
import PropTypes from 'prop-types';

const FeedbackChoices = ({choices, onLeaveFeedback}) => (
    <div>
        {choices.map(choice => (
            <button key={choice} onClick={() => onLeaveFeedback(choice)}>{choice}</button>
        ))}
    </div>
)

FeedbackChoices.propTypes = {
    choice: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  export default FeedbackChoices;