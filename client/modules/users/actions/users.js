export default {
  create({Meteor, LocalState, FlowRouter}, email, password, confirmPassword) {
    // TODO: match email. Is possible create it but no login an user.
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }

    if (!confirmPassword) {
      return LocalState.set('LOGIN_ERROR', 'Confirm password is required.');
    }

    if (password !== confirmPassword) {
      return LocalState.set('LOGIN_ERROR', 'Passwords does not match.');
    }

    Meteor.call('users.create', email, password, (err) => {
      if (err) {
        LocalState.set('LOGIN_ERROR', err.message);
      } else {
        LocalState.set('LOGIN_ERROR', null);
        Meteor.loginWithPassword(email, password);
      }
    });
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        LocalState.set('LOGIN_ERROR', err.message);
      } else {
        LocalState.set('LOGIN_ERROR', null);
      }
    });
  },

  toggleRegisterUser({LocalState}) {
    const isRegistering = LocalState.get('IS_REGISTERING');
    LocalState.set('IS_REGISTERING', !isRegistering);
  },

  clearErrors({LocalState}) {
    LocalState.set('LOGIN_ERROR', null);
    LocalState.set('IS_REGISTERING', null);
    return;
  }
};
