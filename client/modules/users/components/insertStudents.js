import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';

const StudentList = ({students}) => (
  <div>
    <ListGroup>
      {
        students && students.length > 0 ?
        students.map((i) => (
          <ListGroupItem key={i._id}>
            <span>{i.email}</span>
            {i.saving ? <span> saving...</span> : null}
          </ListGroupItem>
        )) :
        <p>No hay estudiantes</p>
      }
    </ListGroup>
  </div>
);

StudentList.propTypes = {
  students: React.PropTypes.array,
};

export default StudentList;
