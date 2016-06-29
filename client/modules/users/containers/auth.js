export function authComposer({context}, onData) {
  const {Meteor, LoginState} = context();
  const loggedIn = LoginState.loggedIn();
  const signedUp = LoginState.signedUp();
  const loggingIn = Meteor.loggingIn();
  onData(null, {loggedIn, signedUp, loggingIn});
}

export function adminComposer({context}, onData) {
  const {Meteor, Roles} = context();

  onData(null, {
    isAdmin: Roles.userIsInRole( Meteor.userId(), 'admin' )
  });
}
