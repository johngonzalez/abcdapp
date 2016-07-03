import React from 'react';
import {Panel} from 'react-bootstrap';
import Responses from '../containers/responses';

const Question = ({questionId, sessionId}) => (
  <Panel>
    <Responses sessionId={sessionId} questionId={questionId} />
  </Panel>
);

Question.propTypes = {
  questionId: React.PropTypes.string.isRequired,
  sessionId: React.PropTypes.string.isRequired
};

export default Question;
