import React from 'react';

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

export default FrequentlyAskedQuestions;