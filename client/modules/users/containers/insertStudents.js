import studentsList from '../components/insertStudents';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('students.list').ready()) {
    const students = Collections.Invitations.find({}).fetch();
    onData(null, {students});
  } else {
    const students = Collections.Invitations.find({}).fetch();
    if (students) {
      onData(null, {students});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(studentsList);
