import React from 'react';
import QuestionsList from '../containers/questionsList';
import ClassItemTitle from '../containers/classItemTitle';
// import {ListGroup, ListGroupItem} from 'react-bootstrap';

const ClassItem = ({classItem}) => (
  <div>
    <ClassItemTitle title={classItem.className} classId={classItem._id} />
    <QuestionsList classId={classItem._id} />
  </div>
);

ClassItem.propTypes = {
  classItem: React.PropTypes.object
};

export default ClassItem;
