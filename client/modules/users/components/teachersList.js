import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const TeachersList = ({teachers}) => (
  <div>
    <ListGroup>
      {
        teachers && teachers.length > 0 ?
        teachers.map((t) => (
          <ListGroupItem key={t._id}>
            {t.emails[0].address}
          </ListGroupItem>
        )) :
        <p>No hay profesores en la lista</p>
      }
    </ListGroup>
  </div>
);

TeachersList.propTypes = {
  teachers: React.PropTypes.array,
};

export default TeachersList;
