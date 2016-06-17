export default {
  openModal({LocalState}) {
    LocalState.set('SHOW_MODAL', true);
  },
  closeModal({LocalState}) {
    LocalState.set('SHOW_MODAL', false);
  },
  create({Meteor, LocalState}, email) {
    if (!email) {
      return LocalState.set('SEND_INVITATION_ERROR', 'Email is required.');
    }
    Meteor.call('invitation.create', email, (err) => {
      if (err) {
        return LocalState.set('SEND_INVITATION_ERROR', err.message);
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
