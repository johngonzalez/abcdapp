import React from 'react';
import Question from '../containers/question';
import QuestionsSelect from '../containers/questionsSelect';

const QuestionsTest = ({sessionId, questions, isFinished}) => (
  questions.length > 0 ?
    <QuestionsSelect questions={questions}>
      {
        isFinished ?
        <p>La clase ha terminado! Proximamente aquí los resultados por pregunta</p> :
        <Question sessionId={sessionId} />
      }
    </QuestionsSelect> :
    <p style={{color: 'red'}}>Aún no hay preguntas!</p>
);

QuestionsTest.propTypes = {
  sessionId: React.PropTypes.string.isRequired,
  questions: React.PropTypes.array.isRequired,
  isFinished: React.PropTypes.bool
};

export default QuestionsTest;
