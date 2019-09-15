import {Accounts} from 'meteor/accounts-base';

export default function ({Meteor}) {
  Accounts.onLogin( () => {
    console.log(Meteor.user());
  });
}
