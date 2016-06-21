import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';
import {Accounts} from 'meteor/accounts-base';

export default function () {
  const users = [ {
    email: 'admin@admin.com',
    password: 'password',
    roles: [ 'admin' ],
  } ];
  users.forEach(({ email, password, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({email, password});
      Roles.addUsersToRoles(userId, roles);
    }
  });
}
