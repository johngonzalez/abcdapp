import TeachersList from '../components/teachersList';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  if (Meteor.subscribe('teachers.list').ready()) {

    const teachers = Meteor.users.find({roles: 'teacher'}).fetch();
    onData(null, {teachers});

  } else {
    const teachers = Meteor.users.find({roles: 'teacher'}).fetch();
    if (teachers) {
      onData(null, {teachers});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(TeachersList);
