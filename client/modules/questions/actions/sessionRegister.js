export default {
  insert({Meteor, FlowRouter, LocalState}, code) {
    LocalState.set('CODE_REGISTER_ERROR', null);
    Meteor.call('sessionCode.insert', code, (err, sessionId) => {
      if (err) {
        LocalState.set('CODE_REGISTER_ERROR', err.message);
      } else {
        LocalState.set('CODE_REGISTER_ERROR', null);
        FlowRouter.go(`/session/${sessionId}`);
      }
    });
  },
  clearState({LocalState}) {
    return LocalState.set('CODE_REGISTER_ERROR', null);
  }
};
