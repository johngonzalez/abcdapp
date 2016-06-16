import {Random} from 'meteor/random';
export default {
  create({Meteor, LocalState}, classId) {
    if (!classId) {
      return LocalState.set('CREATE_SESSION_ERROR', 'Class is required.');
    }
    const _id = Random.id();
    Meteor.call('session.create', _id, classId, (err, code) => {
      if (err) {
        LocalState.set('CREATE_SESSION_ERROR', err.message);
        LocalState.set('CREATE_SESSION', null);
        return;
      }
      LocalState.set('SESSION_CODE', code);
    });
    LocalState.set('CREATE_SESSION_ERROR', null);
    LocalState.set('PUSHED_CREATE_SESSION', true);
  },
  toggleCreateSession({LocalState}) {
    const createSession = LocalState.get('CREATE_SESSION');
    return LocalState.set('CREATE_SESSION', !createSession);
  },
  clearNewSessionState({LocalState}) {
    LocalState.set('CREATE_SESSION_ERROR', null);
    LocalState.set('SESSION_CODE', null);
    return;
  }
};
