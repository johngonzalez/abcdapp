export default {
  onSelect({LocalState}, keyTab) {
    LocalState.set('SELECT_TAB', keyTab);
  },
  clearState({LocalState}) {
    return LocalState.set('SELECT_TAB', null);
  }
};
