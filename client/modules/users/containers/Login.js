import Login from '../components/Login.js';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('LOGIN_ERROR');
  const isRegistering = LocalState.get('IS_REGISTERING');
  onData(null, {error, isRegistering});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  loginUser: actions.users.login,
  toggleRegisterUser: actions.users.toggleRegisterUser,
  create: actions.users.create,
  clearErrors: actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
