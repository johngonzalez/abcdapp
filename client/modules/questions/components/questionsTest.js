import React from 'react';
import Question from '../containers/question';
import QuestionsSelect from '../containers/questionsSelect';
import QuestionsTable from '../../stats/containers/questionsTable';
import LeaderBoard from '../../stats/containers/leaderBoard';
import QuestionStats from '../../stats/containers/question';
import QuestionsSelectStats from '../../stats/containers/questionsSelect';
import {Nav, NavItem} from 'react-bootstrap';

const QuestionsTest = ({userId, keyTab, onSelect, sessionId, questions, isFinished}) => (
  questions.length > 0 ?
    <div>
      {
        isFinished ?
        <div>
          <p>Tu eres el código: {userId}</p>
          <Nav bsStyle="tabs" activeKey={keyTab} onSelect={onSelect}>
            <NavItem eventKey={1} >Tabla de preguntas</NavItem>
            <NavItem eventKey={2} >Tabla de respuestas</NavItem>
            <NavItem eventKey={3} >Tabla de líderes</NavItem>
          </Nav>
          <br />
          {
            keyTab === 1 ?
            <QuestionsTable questions={questions} /> :
            keyTab === 2 ?
            <QuestionsSelectStats questions={questions}>
              <QuestionStats />
            </QuestionsSelectStats> :
            <LeaderBoard questions={questions} />
          }
        </div> :
        <QuestionsSelect questions={questions}>
          <Question sessionId={sessionId} />
        </QuestionsSelect>
      }
    </div> :
    <p style={{color: 'red'}}>Aún no hay preguntas!</p>
);

QuestionsTest.propTypes = {
  userId: React.PropTypes.string,
  keyTab: React.PropTypes.number,
  onSelect: React.PropTypes.func,
  sessionId: React.PropTypes.string.isRequired,
  questions: React.PropTypes.array.isRequired,
  isFinished: React.PropTypes.bool
};

export default QuestionsTest;
