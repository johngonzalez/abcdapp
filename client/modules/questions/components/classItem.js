import React from 'react';
import QuestionsList from '../containers/questionsList';
import ClassItemTitle from '../containers/classItemTitle';
import NewSession from '../containers/newSession';
import {Label} from 'react-bootstrap';

const ClassItem = ({classItem}) => (
  <div>
    <Label>{classItem.isPublic ? 'Pública' : 'Privada'}</Label>
    <ClassItemTitle title={classItem.className} classId={classItem._id} />
    <NewSession classId={classItem._id} />
    <QuestionsList classId={classItem._id} />
  </div>
);

ClassItem.propTypes = {
  classItem: React.PropTypes.object
};

export default ClassItem;
