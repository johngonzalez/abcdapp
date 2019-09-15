import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Roles} from 'meteor/alanning:roles';

export default function () {
  Meteor.publish('users.list', function (userRole) {
    check(userRole, String);
    const isAdmin = Roles.userIsInRole(this.userId, 'admin');
    const selector = {roles: userRole};
    const options = {fields: {'emails.address': 1, roles: 1, verificationCode: 1}};
    if (isAdmin) {
      return Meteor.users.find(selector, options);
    }
    return null;
  });
  Meteor.publish(null, function () {
    return Meteor.users.find({_id: this.userId}, {fields: {verificationCode: 1}});
  });
}
