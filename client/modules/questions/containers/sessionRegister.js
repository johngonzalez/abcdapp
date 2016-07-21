import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import SessionRegister from '../components/sessionRegister.js';

export const composer = ({LocalState, clearState}, onData) => {
  const error = LocalState.get('CODE_REGISTER_ERROR');
  // TODO: Better ui because appear two times the same error when render session component
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearState;
};

export const depsMapper = (context, actions) => (
  { ...context, ...actions.sessionRegister }
);

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SessionRegister);
