import {Invitations} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Roles} from 'meteor/alanning:roles';

export default function () {
  Meteor.publish('invitations.single', function (token) {
    check(token, String);
    const options = {limit: 1};
    return Invitations.find({token}, options);
  });
  Meteor.publish('teachers.list', function () {
    const isAdmin = Roles.userIsInRole(this.userId, 'admin');
    const selector = {roles: 'teacher'};
    const options = {fields: {'emails.address': 1, roles: 1}};
    if (isAdmin) {
      return Meteor.users.find(selector, options);
    }
    return null;
  });
  Meteor.publish('invitations.list', function () {
    const isAdmin = Roles.userIsInRole(this.userId, 'admin');
    const selector = {};
    const options = {fields: {email: 1, createdAt: 1}};
    if (isAdmin) {
      return Invitations.find(selector, options);
    }
    return null;
  });
}
