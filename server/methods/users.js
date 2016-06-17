import {Invitations} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';

export default function () {
  Meteor.methods({
    'invitation.create'(email) {
      check(email, String);
      const createdAt = new Date();
      const token = Random.hexString(16);
      Meteor._sleepForMs(5000);
      const invitation = {email, createdAt, token};
      Invitations.insert(invitation);
    }
  });
}
