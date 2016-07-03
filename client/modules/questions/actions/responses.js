import {Random} from 'meteor/random';

export default {
  select({Meteor, LocalState}, _id = Random.id(), sessionId, questionId, selected) {

    // TODO: Handle error if questionId and selected are not set
    LocalState.set('SELECT_RESPONSE_ERROR', null);
    Meteor.call('response.select', _id, sessionId, questionId, selected, (err) => {
      if (err) {
        return LocalState.set('SELECT_RESPONSE_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SELECT_RESPONSE_ERROR', null);
  }
};
