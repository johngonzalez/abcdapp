import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'session.create'(_id, classId) {
      check(classId, String);
      check(_id, String);
      const createdAt = new Date();
      const saving = true;
      const session = {_id, classId, createdAt, saving};
      Collections.Sessions.insert(session);
    },
    'session.finish'(sessionId) {
      check(sessionId, String);
      const modifier = { $set: { updating: true, isFinished: true } };
      Collections.Sessions.update(sessionId, modifier);
    }
  });
}
