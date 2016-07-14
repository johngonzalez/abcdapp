import {Sessions, Classes} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publishComposite('sessions.classes.composite', function (sessionId) {
    check(sessionId, String);

    const _session = () => {
      const options = { fields: { _id: 1, classId: 1 }, limit: 1 };
      return Sessions.find(sessionId, options);
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
}
