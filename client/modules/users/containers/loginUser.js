import LoginUser from '../components/loginUser.js';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearState}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('LOGIN_ERROR');
  onData(null, {error});
  return clearState;
};

export const depsMapper = (context, actions) => ({
  login: actions.loginUser.login,
  clearState: actions.loginUser.clearState,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LoginUser);
