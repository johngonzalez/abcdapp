/* eslint no-alert: 0*/
export default {
  finish({Meteor, LocalState}, e, sessionId) {
    e.preventDefault();
    LocalState.set('SESSION_FINISH_ERROR', null);
    if (confirm('Seguro desea finalizar la clase, no puede deshacer esta acción')) {
      Meteor.call('session.finish', sessionId, (err) => {
        if (err) {
          LocalState.set('SESSION_FINISH_ERROR', err.message);
        }
        LocalState.set('SESSION_FINISH_ERROR', null);
      });
    }
  },
  clearState({LocalState}) {
    return LocalState.set('SESSION_FINISH_ERROR', null);
  }
};
