import React from 'react';
import QuestionsList from '../containers/questionsList';
// import {ListGroup, ListGroupItem} from 'react-bootstrap';

const ClassItem = ({classItem}) => (
  <div>
    <h2>{classItem.className}</h2>
     <QuestionsList classId={classItem._id} />
  </div>
);

ClassItem.propTypes = {
  classItem: React.PropTypes.object
};

export default ClassItem;
