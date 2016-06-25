export default {
  insert({Meteor, FlowRouter, LocalState}, token) {
    Meteor.call('sessionToken.insert', token, (err, sessionId) => {
      if (err) {
        LocalState.set('TOKEN_REGISTER_ERROR',err.message);
      } else {
        FlowRouter.go(`/session/${sessionId}`);
      }
    });
  },
  clearState({LocalState}) {
    return LocalState.set('TOKEN_REGISTER_ERROR');
  }
};
