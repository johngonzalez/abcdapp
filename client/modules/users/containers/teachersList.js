import TeachersList from '../components/teachersList';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {adminComposer} from './auth';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();

  const keyTab = LocalState.get('SELECT_TAB') || 1;
  if (Meteor.subscribe('teachers.list').ready() &&
      Meteor.subscribe('invitations.list').ready()) {

    const teachers = Meteor.users.find({roles: 'teacher'}).fetch();
    const invitations = Collections.Invitations.find({}).fetch();
    onData(null, {keyTab, teachers, invitations});

  } else {

    const teachers = Meteor.users.find({roles: 'teacher'}).fetch();
    const invitations = Collections.Invitations.find({}).fetch();
    if (teachers) {
      onData(null, {keyTab, teachers, invitations});
    } else {
      onData({keyTab});
    }
  }
};

export const depsMapper = (context, actions) => ({
  onSelect: actions.teachersList.onSelect,
  clearState: actions.teachersList.clearState,
  context: () => context
});

export default composeAll(
  composeWithTracker(adminComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TeachersList);
