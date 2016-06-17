import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const Teachers = ({isAdmin}) => (
  <div>
    {
      isAdmin ?
      <ListGroup>
        <ListGroupItem>
          John González
        </ListGroupItem>
      </ListGroup> :
      <p>Only admin can be here!</p>
    }
  </div>
);

Teachers.propTypes = {
  isAdmin: React.PropTypes.bool.isRequired
};

export default Teachers;
