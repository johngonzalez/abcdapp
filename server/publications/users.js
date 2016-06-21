import {Invitations} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('invitations.single', function (token) {
    check(token, String);
    const options = {limit: 1};
    return Invitations.find({token}, options);
  });
}
