import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import SessionControlBar from '../components/sessionControlBar';

export const composer = ({context, classId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('session.unfinished', classId).ready()) {
    // TODO: Insert teacher to session
    const selector = { classId };
    const sessionUnfinished = Collections.Sessions.findOne(selector);
    onData(null, {sessionUnfinished});
  } else {
    const selector = { classId, isFinished: null };
    const sessionUnfinished = Collections.Sessions.findOne(selector);
    if (sessionUnfinished) {
      onData(null, {sessionUnfinished});
    } else {
      onData(null, null);
    }
  }
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SessionControlBar);
