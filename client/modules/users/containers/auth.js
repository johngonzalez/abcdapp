export function authComposer({context}, onData) {
  const {Meteor} = context();

  onData(null, {
    loggedIn: Boolean(Meteor.userId()),
    loggingIn: Meteor.loggingIn()
  });
}

export function adminComposer({context}, onData) {
  const {Meteor, Roles} = context();

  onData(null, {
    isAdmin: Roles.userIsInRole( Meteor.userId(), 'admin' )
  });
}
