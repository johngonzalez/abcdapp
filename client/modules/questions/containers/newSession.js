import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import NewSession from '../components/newSession';

export const composer = ({LocalState, clearState}, onData) => {
  const error = LocalState.get('CREATE_SESSION_ERROR');
  onData(null, {error});
  return clearState;
};

export const depsMapper = (context, actions) => (
  {...context, ...actions.newSession}
);

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewSession);
