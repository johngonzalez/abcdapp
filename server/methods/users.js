import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';
// import {SSR} from 'meteor/meteorhacks:ssr';
// import {Email} from 'meteor/email';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
import {LoginState} from 'meteor/brettle:accounts-login-state';

export default function () {
  Meteor.methods({
    'users.create'(email, role) {
      check(email,String);
      check(role, String);
      const password = Random.id(6);
      const verificationCode = password;
      const createdAt = new Date();
      const userId = Accounts.createUser({email, password, createdAt});
      if (userId) {
        Roles.setUserRoles(userId, role);
        Meteor.users.update(userId, {
          $set: {verificationCode}
        });
      }
    },
    'users.firstLogin'() {
      const user = Meteor.user();
      if (user && user.verificationCode) {
        // Meteor.user.update(user._id, {
        //   $unset: {verificationCode: 1}
        // });
        console.log(user.verificationCode);
      }
    },
    'users.addDisplayName'() {
      const user = Meteor.user();
      if (user && !LoginState.signedUp(user) && !user.displayName) {
        Meteor.users.update(user._id, {
          $set: {displayName: `usuario ${Math.floor((Math.random() * 1000))}`}
        });
      }
    }
  });
}
