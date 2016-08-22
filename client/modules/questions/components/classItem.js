import React from 'react';
import QuestionsList from '../containers/questionsList';
import ClassItemTitle from '../containers/classItemTitle';
// import NewSession from '../containers/newSession';
import SessionControlBar from '../containers/sessionControlBar';
import {Label} from 'react-bootstrap';

const ClassItem = ({classItem}) => (
  <div>
    <Label>{classItem.isPublic ? 'Pública' : 'Privada'}</Label>
    <ClassItemTitle title={classItem.className} classId={classItem._id} />
    <hr />
    <SessionControlBar classId={classItem._id} />
    <hr />
    <QuestionsList classId={classItem._id} />
  </div>
);

ClassItem.propTypes = {
  classItem: React.PropTypes.object
};

export default ClassItem;
