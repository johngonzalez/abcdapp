import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import UsersList from '../containers/teachersList';
import InvitationsList from '../containers/invitationsList';

const TeachersInvitationsNav = ({keyTab, onSelect, isAdmin}) => (
  <div>
    {
      isAdmin ?
      <div>
        <Nav bsStyle="tabs" activeKey={keyTab} onSelect={onSelect}>
          <NavItem eventKey={1} >Profesores</NavItem>
          <NavItem eventKey={2} >Estudiantes</NavItem>
          <NavItem eventKey={3} >Invitaciones</NavItem>
        </Nav>
        <br />
        {
          keyTab === 1 ? <UsersList userRole="teacher" /> :
          keyTab === 2 ? <UsersList userRole="student" /> :
          <InvitationsList />
        }
      </div> :
      <div><p>Only admin can be here!</p></div>
    }
  </div>
);
TeachersInvitationsNav.propTypes = {
  isAdmin: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  keyTab: React.PropTypes.number.isRequired
};
export default TeachersInvitationsNav;
