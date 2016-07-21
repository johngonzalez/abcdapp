import {Sessions, Classes} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publishComposite('sessions.classes.composite', function (sessionId) {
    check(sessionId, String);

    const _session = () => {
      const options = { fields: { _id: 1, classId: 1 }, limit: 1 };
      const session = Sessions.find(sessionId, options);
      if (session.fetch().length === 0) {
        return;
      }
      return session;
    };

    const _classes = (session) => {
      const options = { fields: { _id: 1, isPublic: 1 }, limit: 1 };
      return Classes.find(session.classId, options);
    };

    return {
      find: _session,
      children: [
        { find: _classes }
      ]
    };
  });
  Meteor.publish('session.unfinished', function (classId) {
    check(classId, String);
    // TODO: Add teacher to selector
    const selector = {classId, isFinished: null};
    const options = { sort: { createdAt: -1 }, limit: 1 };
    Meteor._sleepForMs(5000);
    return Sessions.find(selector, options);
  });
}
