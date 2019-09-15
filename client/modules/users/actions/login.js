export default {
  toggle({LocalState}) {
    const loginUsingUser = LocalState.get('LOGIN_USING_GUEST');
    LocalState.set('LOGIN_USING_GUEST', !loginUsingUser);
  },
  clearState({LocalState}) {
    return LocalState.set('LOGIN_USING_GUEST', null);
  }
};
