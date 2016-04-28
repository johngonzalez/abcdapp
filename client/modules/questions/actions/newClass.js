export default {
  openModal({LocalState}) {
    LocalState.set('SHOW_MODAL', true);
  },
  closeModal({LocalState}) {
    LocalState.set('SHOW_MODAL', false);
  },
  create({Meteor, LocalState, FlowRouter}, className) {
    // TODO: match email. Is possible create it but no login an user.
    if (!className) {
      return LocalState.set('CREATE_CLASS_ERROR', 'Class name is required.');
    }

    LocalState.set('CREATE_CLASS_ERROR', null);
    Meteor.call('class.create', className, (err) => {
      if (err) {
        return LocalState.set('CREATE_CLASS_ERROR', err.message);
      }
    });
    LocalState.set('SHOW_MODAL', false);
  },
  clearNewClassState({LocalState}) {
    LocalState.set('SHOW_MODAL', null);
    LocalState.set('CREATE_CLASS_ERROR', null);
    return;
  }
};
