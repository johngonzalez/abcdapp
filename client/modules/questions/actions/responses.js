export default {
  select({Meteor, LocalState}, classId, questionId, responseId) {

    // TODO: Handle error if questionId and responseId are not set
    LocalState.set('SELECT_RESPONSE_ERROR', null);

    const _id = Meteor.uuid();
    Meteor.call('response.select', _id, classId, questionId, responseId, (err) => {
      if (err) {
        return LocalState.set('SELECT_RESPONSE_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SELECT_RESPONSE_ERROR', null);
  }
};
