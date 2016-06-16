import NewSession from '../components/newSession';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearNewSessionState}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_SESSION_ERROR');
  const code = LocalState.get('SESSION_CODE');
  const pushedCreateSession = LocalState.get('PUSHED_CREATE_SESSION');
  onData(null, {code, error, pushedCreateSession});

  // clearErrors when unmounting the component
  return clearNewSessionState;
};

export const depsMapper = (context, actions) => ({
  clearNewQuestionState: actions.newSession.clearNewQuestionState,
  create: actions.newSession.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewSession);
