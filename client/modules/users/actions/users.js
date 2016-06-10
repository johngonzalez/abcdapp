import {Accounts} from 'meteor/accounts-base';
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
    LocalState.set('LOGIN_ERROR', null);

    Accounts.createUser({email, password});
    FlowRouter.go('/');
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/');
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
