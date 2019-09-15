import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'invitation.create'(_id, email) {
      check(_id, String);
      check(email, String);
      const createdAt = new Date();
      const role = 'teacher';
      const saving = true;
      const invitation = {_id, email, createdAt, role, saving};
      Collections.Invitations.insert(invitation);
    }
  });
}
