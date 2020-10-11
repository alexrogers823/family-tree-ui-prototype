import React from 'react';
import PropTypes from 'prop-types';

const FrequentlyAskedQuestions = props => {
  const Question = (question, answer) => {
    return (
      <div>
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
    );
  };

  const ListOfQuestions = () => {
    return props.questions.map(q => {
      return Question(q.question, q.answer);
    })
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {ListOfQuestions()}
    </div>
  );
};

FrequentlyAskedQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FrequentlyAskedQuestions;