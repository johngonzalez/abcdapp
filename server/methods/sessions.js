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
      throw Meteor.Error('sessionToken.insert.sessionNoExists',
      'Session does not exits',
      'Session does not exits. Try other session');
    }
  });
}
