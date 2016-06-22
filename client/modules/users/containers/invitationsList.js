import InvitationsList from '../components/invitationsList';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('invitations.list').ready()) {
    const invitations = Collections.Invitations.find({}).fetch();
    onData(null, {invitations});
  } else {
    const invitations = Collections.Invitations.find({}).fetch();
    if (invitations) {
      onData(null, {invitations});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(InvitationsList);
