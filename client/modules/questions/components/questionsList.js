import React from 'react';
import NewQuestion from '../containers/newQuestion';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const QuestionsList = ({questions, classId}) => (
  <div>
    <ListGroup>
      {
        questions ?
          questions.map(q => (
            <ListGroupItem key={q._id} href={q.saving ? null : `/class/${q._id}`}>
              {q.questionName}
              {q.saving ? <b> saving...</b> : null}
            </ListGroupItem>
          )) :
          null
      }
    </ListGroup>
    <NewQuestion classId={classId} />
  </div>
);

QuestionsList.propTypes = {
  questions: React.PropTypes.array,
  classId: React.PropTypes.string.isRequired
};

export default QuestionsList;
