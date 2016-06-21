export default {
  create({Meteor, LocalState, FlowRouter}, email, password, confirmPassword, token) {
    if (!email) {
      return LocalState.set('ACCEPT_INVITATION_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('ACCEPT_INVITATION_ERROR', 'Password is required.');
    }

    if (!confirmPassword) {
      return LocalState.set('ACCEPT_INVITATION_ERROR', 'Confirm password is required.');
    }

    if (password !== confirmPassword) {
      return LocalState.set('ACCEPT_INVITATION_ERROR', 'Passwords does not match.');
    }

    if (!token) {
      return LocalState.set('ACCEPT_INVITATION_ERROR', 'Token is required');
    }
    Meteor.call('invitation.accept', email, password, token, (err) => {
      if (err) {
        LocalState.set('ACCEPT_INVITATION_ERROR', err.message);
      } else {
        LocalState.set('ACCEPT_INVITATION_ERROR', null);
        Meteor.loginWithPassword(email, password);
        FlowRouter.go('/');
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('ACCEPT_INVITATION_ERROR', null);
  }
};
