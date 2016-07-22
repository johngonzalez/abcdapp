export default {
  select({LocalState}, questionId) {
    LocalState.set('SELECT_QUESTION', questionId - 1);
  },

  clearSelection({LocalState}) {
    return LocalState.set('SELECT_QUESTION', null);
  }
};
