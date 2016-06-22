import React from 'react';
import {ListGroup, ListGroupItem, Nav, NavItem} from 'react-bootstrap';
import NewTeacher from '../containers/newTeacher';

const TeachersList = ({keyTab, onSelect, isAdmin, teachers, invitations}) => (
  <div>
    {
      isAdmin ?
      <div>
      <Nav bsStyle="tabs" activeKey={keyTab} onSelect={onSelect}>
        <NavItem eventKey={1} >Profesores</NavItem>
        <NavItem eventKey={2} >Invitaciones</NavItem>
      </Nav>
      {
        keyTab === 1 ?
          <div>
            <br />
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
          </div> :
          <div>
            <br />
            <ListGroup>
              {
                invitations ?
                invitations.map((i) => (
                  <ListGroupItem key={i._id}>
                    {i.email}
                  </ListGroupItem>
                )) :
                null
              }
            </ListGroup>
          <NewTeacher />
          </div>
        }
      </div> :
      <p>Only admin can be here!</p>
    }
  </div>
);

TeachersList.propTypes = {
  isAdmin: React.PropTypes.bool.isRequired,
  teachers: React.PropTypes.array,
  invitations: React.PropTypes.array,
  onSelect: React.PropTypes.func.isRequired,
  keyTab: React.PropTypes.number.isRequired
};

export default TeachersList;
