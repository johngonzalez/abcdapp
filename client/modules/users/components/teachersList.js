import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import NewTeacher from '../containers/newTeacher';

const Teachers = ({isAdmin}) => (
  <div>
    {
      isAdmin ?
      <div>
        <ListGroup>
          <ListGroupItem>
            John González
          </ListGroupItem>
        </ListGroup>
        <NewTeacher />
      </div> :
      <p>Only admin can be here!</p>
    }
  </div>
);

Teachers.propTypes = {
  isAdmin: React.PropTypes.bool.isRequired
};

export default Teachers;
