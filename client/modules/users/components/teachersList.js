import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import NewTeacher from '../containers/newTeacher';

const TeachersList = ({users, userRole}) => (
  <div>
    <ListGroup>
      {
        users && users.length > 0 ?
        users.map((t) => (
          <ListGroupItem key={t._id}>
            {t.emails[0].address}
            {t.verificationCode ? ` - ${t.verificationCode}` : null}
          </ListGroupItem>
        )) :
        <p>
        {
          userRole === 'teacher' ?
          'No hay profesores en la lista' :
          'No hay estudiantes en la lista'
        }
        </p>
      }
    </ListGroup>
    <NewTeacher userRole={userRole} />
  </div>
);

TeachersList.propTypes = {
  users: React.PropTypes.array,
  userRole: React.PropTypes.string,
};

export default TeachersList;
