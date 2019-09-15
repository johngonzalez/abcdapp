export default {
  updateTitle({Meteor, LocalState}, classId, className) {
    if (!classId) {
      return LocalState.set('UPDATE_TITLE_ERROR', 'Class Id is required.');
    }
    if (!className) {
      return LocalState.set('UPDATE_TITLE_ERROR', 'Class name is required.');
    }
    LocalState.set('UPDATE_TITLE_ERROR', null);
    Meteor.call('class.update', classId, className, (err) => {
      if (err) {
        return LocalState.set('UPDATE_TITLE_ERROR', err.message);
      }
    });
  },
  toggleEdit({LocalState}) {
    const isEdit = !LocalState.get('EDIT_TITLE');
    return LocalState.set('EDIT_TITLE', isEdit);
  },
  clearState({LocalState}) {
    LocalState.set('UPDATE_TITLE_ERROR', null);
    LocalState.set('EDIT_TITLE', false);
    return;
  }
};
