export default {
  select({LocalState}, questionId) {
    LocalState.set('SELECT_QUESTION', questionId);
  },

  clearSelection({LocalState}) {
    return LocalState.set('SELECT_QUESTION', null);
  }
};
