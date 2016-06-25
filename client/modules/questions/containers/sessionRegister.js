import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import SessionRegister from '../components/sessionRegister.js';

export const composer = ({context, clearState}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CODE_REGISTER_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearState;
};

export const depsMapper = (context, actions) => ({
  clearState: actions.sessionRegister.clearState,
  insert: actions.sessionRegister.insert,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SessionRegister);
