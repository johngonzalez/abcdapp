import Navigation from '../components/navigation';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {adminComposer} from '../../users/containers/auth';

export const depsMapper = (context, actions) => ({
  logout: actions.navigation.logout,
  context: () => context
});

export default composeAll(
  composeWithTracker(adminComposer),
  useDeps(depsMapper)
)(Navigation);
