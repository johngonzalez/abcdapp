/* global Assets */
import {Invitations} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';
import {SSR} from 'meteor/meteorhacks:ssr';
import {Email} from 'meteor/email';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
import {LoginState} from 'meteor/brettle:accounts-login-state';

export default function () {
  Meteor.methods({
    'users.create'(email, password) {
      check(email,String);
      check(password, String);
      const createdAt = new Date();
      const role = 'student';
      const userId = Accounts.createUser({email, password, createdAt});
      if (userId) {
        Roles.setUserRoles(userId, role);
      }
    },
    'users.addDisplayName'() {
      const user = Meteor.user();
      if (user && !LoginState.signedUp(user) && !user.displayName) {
        Meteor.users.update(user._id, {
          $set: {displayName: `usuario ${Math.floor((Math.random() * 1000))}`}
        });
      }
    },
    'invitation.create'(_id, email) {
      check(_id, String);
      check(email, String);
      const createdAt = new Date();
      const token = Random.hexString(16);
      const role = 'teacher';
      Meteor._sleepForMs(5000);
      const invitation = {_id, email, createdAt, token, role};
      const userExits = Accounts.findUserByEmail(email);
      if (userExits) {
        throw new Meteor.Error('invitation.create.userexits',
        'User email already exits',
        'User email already exits. Try with other email');
      } else {
        Invitations.insert(invitation);

        SSR.compileTemplate('htmlEmail', Assets.getText('invitationEmail.html'));

        const emailData = {
          url: `http://localhost:3000/invite/${token}`,

        };
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
        Email.send({
          to: email,
          from: 'johngonzalez@mimentor.co',
          subject: 'Invitación',
          html: SSR.render('htmlEmail', emailData)
        });
      }
    },
    'invitation.accept'(email, password, token) {
      check(email, String);
      check(password, String);
      check(token, String);

      const invitation = Invitations.findOne({token});
      if (invitation) {
        const userId = Accounts.createUser({email, password});
        if (userId) {
          Roles.setUserRoles(userId, invitation.role);
          Invitations.remove({email});
        }
      }
    }
  });
}
