import React from 'react';
import {Pagination} from 'react-bootstrap';
import Question from '../components/question';

const QuestionsTest = ({questionsCount, currentQuestion, sessionId, select}) => (
  questionsCount ?
    <div>
      <div className="text-center">
          <Pagination
            bsSize="big"
            activePage={currentQuestion.questionSeq + 1}
            items={questionsCount}
            onSelect={select}
          />
      </div>
      {
        currentQuestion && currentQuestion._id ?
          <Question sessionId={sessionId} questionId={currentQuestion._id} /> :
          <p style={{color: 'red'}}>Existe un problema con la pregunta :(</p>
      }
    </div> :
    <p style={{color: 'red'}}>Aún no hay preguntas!</p>
);

QuestionsTest.propTypes = {
  select: React.PropTypes.func.isRequired,
  currentQuestion: React.PropTypes.object.isRequired,
  questionsCount: React.PropTypes.number.isRequired,
  sessionId: React.PropTypes.string.isRequired,
};

export default QuestionsTest;
