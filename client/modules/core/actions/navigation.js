export default {
  logout({FlowRouter, Meteor, LocalState}, e) {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err) {
        LocalState.set('LOGOUT_ERROR', err.message);
      } else {
        FlowRouter.go('/');
      }
    });
  },
  clearState({LocalState}) {
    return LocalState.set('LOGOUT_ERROR', null);
  }
};
