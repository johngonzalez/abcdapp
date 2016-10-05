import React from 'react';

const QuestionsTable = ({usersWithGoodQuestions}) => (
  <div>
    <p>Respuestas correctas por pregunta:</p>
    <ol>
      { usersWithGoodQuestions.map((q, i) => <li key={i}>{q.length}</li>) }
    </ol>
  </div>
);

QuestionsTable.propTypes = {
  usersWithGoodQuestions: React.PropTypes.array.isRequired
};

export default QuestionsTable;
