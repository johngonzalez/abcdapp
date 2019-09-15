import TeachersList from '../components/teachersList';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userRole}, onData) => {
  const {Meteor} = context();
  if (Meteor.subscribe('users.list', userRole).ready()) {

    const users = Meteor.users.find({roles: userRole}).fetch();
    onData(null, {users});

  } else {
    const users = Meteor.users.find({roles: userRole}).fetch();
    if (users) {
      onData(null, {users});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(TeachersList);
