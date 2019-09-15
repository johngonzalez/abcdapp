import {Random} from 'meteor/random';
export default {
  create({Meteor, LocalState}, e, classId) {
    e.preventDefault();
    const sessionId = Random.id();
    Meteor.call('session.create', sessionId, classId, (err) => {
      if (err) {
        LocalState.set('CREATE_SESSION_ERROR', err.message);
      }
    });
    LocalState.set('CREATE_SESSION_ERROR', null);
  },
  clearState({LocalState}) {
    LocalState.set('CREATE_SESSION_ERROR', null);
    return;
  }
};
