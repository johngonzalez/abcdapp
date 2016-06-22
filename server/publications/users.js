import {Invitations} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('invitations.single', function (token) {
    check(token, String);
    const options = {limit: 1};
    return Invitations.find({token}, options);
  });
  Meteor.publish('teachers.list', function () {
    const selector = {roles: 'teacher'};
    const options = {fields: {'emails.address': 1, roles: 1}};
    return Meteor.users.find(selector, options);
  });
  Meteor.publish('invitations.list', function () {
    const selector = {};
    const options = {fields: {email: 1, createdAt: 1}};
    return Invitations.find(selector, options);
  });
}
