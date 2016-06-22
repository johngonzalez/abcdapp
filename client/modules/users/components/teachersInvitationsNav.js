import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import TeachersList from '../containers/teachersList';
import InvitationsList from '../containers/invitationsList';

const TeachersInvitationsNav = ({keyTab, onSelect, isAdmin}) => (
  <div>
    {
      isAdmin ?
      <div>
        <Nav bsStyle="tabs" activeKey={keyTab} onSelect={onSelect}>
          <NavItem eventKey={1} >Profesores</NavItem>
          <NavItem eventKey={2} >Invitaciones</NavItem>
        </Nav>
        <br />
        {keyTab === 1 ? <TeachersList /> : <InvitationsList />}
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
