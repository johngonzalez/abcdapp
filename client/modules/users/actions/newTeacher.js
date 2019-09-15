export default {
  openModal({LocalState}) {
    LocalState.set('SEND_INVITATION_ERROR', null);
    LocalState.set('SHOW_MODAL', true);
  },
  closeModal({LocalState}) {
    LocalState.set('SHOW_MODAL', false);
  },
  create({Meteor, LocalState}, email, userRole) {
    if (!email) {
      return LocalState.set('FORM_INVITATION_ERROR', 'Email is required.');
    }
    if (!userRole) {
      return LocalState.set('FORM_INVITATION_ERROR', 'User role is required.');
    }
    Meteor.call('users.create', email, userRole, (err) => {
      if (err) {
        LocalState.set('SEND_INVITATION_ERROR', err.message);
      }
    });
    LocalState.set('SHOW_MODAL', false);
  },
  clearNewClassState({LocalState}) {
    LocalState.set('SHOW_MODAL', null);
    LocalState.set('FORM_INVITATION_ERROR', null);
    LocalState.set('SEND_INVITATION_ERROR', null);
    return;
  }
};
