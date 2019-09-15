import Login from '../components/login';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearState}, onData) => {
  const {LocalState} = context();
  const loginUsingGuest = LocalState.get('LOGIN_USING_GUEST');
  onData(null, {loginUsingGuest});

  // clearErrors when unmounting the component
  return clearState;
};

export const depsMapper = (context, actions) => ({
  toggle: actions.login.toggle,
  clearState: actions.login.clearState,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
