/* global Assets */
import {Invitations} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';
import {SSR} from 'meteor/meteorhacks:ssr';
import {Email} from 'meteor/email';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';

export default function () {
  Meteor.methods({
    'users.create'(email, password) {
      check(email,String);
      check(password, String);
      Accounts.createUser({email, password});
    },
    'invitation.create'(email) {
      check(email, String);
      const createdAt = new Date();
      const token = Random.hexString(16);
      const role = 'teacher';
      Meteor._sleepForMs(5000);
      const invitation = {email, createdAt, token, role};
      Invitations.insert(invitation);

      SSR.compileTemplate( 'htmlEmail', Assets.getText('invitationEmail.html'));

      const emailData = {
        url: `http://localhost:3000/invite/${token}`,
      };

      Email.send({
        to: email,
        from: 'johngonzalez@mimentor.co',
        subject: 'Invitación',
        html: SSR.render('htmlEmail', emailData)
      });
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
        }
        Invitations.remove({_id: invitation._id});
      }
    }
  });
}
