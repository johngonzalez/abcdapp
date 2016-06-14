import React from 'react';
import {Panel} from 'react-bootstrap';
import Responses from '../containers/responses';

const Question = ({questionId, classId}) => (
  <Panel>
    <Responses classId={classId} questionId={questionId} />
  </Panel>
);

Question.propTypes = {
  questionId: React.PropTypes.string.isRequired,
  classId: React.PropTypes.string.isRequired
};

export default Question;
