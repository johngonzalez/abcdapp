import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import NewTeacher from '../containers/newTeacher';

const InvitationsList = ({invitations}) => (
  <div>
    <ListGroup>
      {
        invitations && invitations.length > 0 ?
        invitations.map((i) => (
          <ListGroupItem key={i._id}>
            <span>{i.email}</span>
            {i.saving ? <span> saving...</span> : null}
          </ListGroupItem>
        )) :
        <p>No hay invitaciones</p>
      }
    </ListGroup>
    <NewTeacher />
  </div>
);

InvitationsList.propTypes = {
  invitations: React.PropTypes.array,
};

export default InvitationsList;
