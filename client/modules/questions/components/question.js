import React from 'react';
import {Panel} from 'react-bootstrap';
import Responses from '../containers/responses';

const Question = ({questionId}) => (
  <Panel>
    <Responses questionId={questionId} />
  </Panel>
);

Question.propTypes = {
  questionId: React.PropTypes.number.isRequired
};

export default Question;
