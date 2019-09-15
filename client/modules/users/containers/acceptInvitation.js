import AcceptInvitation from '../components/acceptInvitation.js';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, token}, onData) => {
  const {Meteor, LocalState, Collections} = context();
  const error = LocalState.get('ACCEPT_INVITATION_ERROR');
  if (Meteor.subscribe('invitations.single', token).ready()) {
    const invitation = Collections.Invitations.findOne({token});
    const email = invitation ? invitation.email : null;
    onData(null, {error, email});
  } else {
    onData(null, {error});
  }
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.acceptInvitation.create,
  clearErrors: actions.acceptInvitation.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AcceptInvitation);
