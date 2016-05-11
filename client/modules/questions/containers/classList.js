import ClassList from '../components/classList';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {authComposer} from '/client/modules/users/containers/auth';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('classes.list').ready()) {
    const classes = Collections.Classes.find().fetch();
    onData(null, {classes});
  } else {
    const classes = Collections.Classes.find().fetch();
    if (classes) {
      onData(null, {classes});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps()
)(ClassList);
