import React from 'react';
import {Panel} from 'react-bootstrap';
import Responses from '../containers/responses';

const Question = ({sessionId, questionId}) => (
  <Panel>
    <Responses sessionId={sessionId} questionId={questionId} />
  </Panel>
);

Question.propTypes = {
  sessionId: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.string.isRequired
};

export default Question;
