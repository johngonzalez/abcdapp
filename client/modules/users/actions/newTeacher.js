import {Random} from 'meteor/random';

export default {
  openModal({LocalState}) {
    LocalState.set('SEND_INVITATION_ERROR', null);
    LocalState.set('SHOW_MODAL', true);
  },
  closeModal({LocalState}) {
    LocalState.set('SHOW_MODAL', false);
  },
  create({Meteor, LocalState}, email) {
    if (!email) {
      return LocalState.set('SEND_INVITATION_ERROR', 'Email is required.');
    }
    const _id = Random.id();
    Meteor.call('invitation.create', _id, email, (err) => {
      if (err) {
        LocalState.set('SEND_INVITATION_ERROR', err.message);
      }
    });
    LocalState.set('SHOW_MODAL', false);
  },
  clearNewClassState({LocalState}) {
    LocalState.set('SHOW_MODAL', null);
    LocalState.set('SEND_INVITATION_ERROR', null);
    return;
  }
};
