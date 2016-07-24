import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import SessionFinish from '../components/sessionFinish';

export const composer = ({context, clearState, sessionId, code}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('SESSION_FINISH_ERROR');
  onData(null, {sessionId, code, error});
  return clearState;
};

export const depsMapper = (context, actions) => (
  { context: () => context, ...actions.sessionFinish }
);

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SessionFinish);
