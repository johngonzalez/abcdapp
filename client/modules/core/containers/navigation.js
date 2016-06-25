import Navigation from '../components/navigation';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearState}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('LOGOUT_ERROR');
  onData(null, {error});
  return clearState;
};

export const depsMapper = (context, actions) => ({
  logout: actions.navigation.logout,
  clearState: actions.navigation.clearState,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Navigation);
