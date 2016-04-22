export default {
  select({Meteor, LocalState}, questionId, responseId) {

    // TODO: Handle error if questionId and responseId are not set
    LocalState.set('SELECT_RESPONSE_ERROR', null);

    // Accounts.SELECTUser({email, password});
    // FlowRouter.go('/');
    Meteor.call('response.select', questionId, responseId, (err) => {
      if (err) {
        return LocalState.set('SELECT_RESPONSE_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SELECT_RESPONSE_ERROR', null);
  }
};
