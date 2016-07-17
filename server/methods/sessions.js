import {Sessions} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';

export default function () {
  Meteor.methods({
    'session.create'(_id, classId) {
      check(classId, String);
      check(_id, String);
      const createdAt = new Date();
      let code = Random.id(6);
      let sessionWithSameCode = Sessions.findOne({code});
      while (sessionWithSameCode) { // while exits a session with same code
        code = Random.id(6);
        sessionWithSameCode = Sessions.findOne({code});
      }
      const session = {_id, classId, createdAt, code};
      Meteor._sleepForMs(5000);
      Sessions.insert(session);
      return code;
    },
    'sessionToken.insert'(code) {
      check(code, String);
      const session = Sessions.findOne({code});
      if (session) {
        return session._id;
      }
      throw new Meteor.Error(
        'sessionToken.insert.sessionNoExists',
        'Session does not exits',
        'Session does not exits. Try other session');
    },
    'session.finish'(sessionId) {
      check(sessionId, String);
      Meteor._sleepForMs(5000);
      const session = Sessions.update(sessionId, { $set: {isFinished: true} });
      if (!session) {
        throw new Meteor.Error(
          'session.finish.sessionNotFound',
          'session is not found',
          'Session is not found. Maybe this session does not exists'
        );
      }
    }
  });
}
