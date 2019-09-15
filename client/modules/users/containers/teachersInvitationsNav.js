import TeachersInvitationsNav from '../components/teachersInvitationsNav';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {adminComposer} from './auth';

export const composer = ({context, clearState}, onData) => {
  const {LocalState} = context();

  const keyTab = LocalState.get('SELECT_TAB') || 1;
  onData(null, {keyTab});
  return clearState;
};

export const depsMapper = (context, actions) => ({
  onSelect: actions.teachersInvitationsNav.onSelect,
  clearState: actions.teachersInvitationsNav.clearState,
  context: () => context
});

export default composeAll(
  composeWithTracker(adminComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TeachersInvitationsNav);
