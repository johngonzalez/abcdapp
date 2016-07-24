import React from 'react';

const QuestionsMain = ({question}) => (
  <div>
    <p>id: {question._id}</p>
    <p>seq: {question.questionSeq}</p>
    <p>key: {question.response}</p>
  </div>
);

QuestionsMain.propTypes = {
  sessionId: React.PropTypes.string
};

export default QuestionsMain;
