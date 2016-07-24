import {Sessions, Classes, Questions, Responses} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publishComposite('sessions.single.composite', function (sessionId) {
    check(sessionId, String);
    const _session = () => {
      const options = { fields: { _id: 1, classId: 1, isFinished: 1 }, limit: 1 };
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

    const _questions = (session) => {
      let fields = { _id: 1, classId: 1, questionSeq: 1 };
      if (session.isFinished) {
        fields = { ...fields, response: 1 };
      }
      return Questions.find({ classId: session.classId }, { fields });
    };

    const _responses = (session) => {
      let selector = { sessionId };
      if (!session.isFinished) {
        selector = { ...selector, owner: this.userId };
      }
      return Responses.find(selector, { fields: { createdAt: 0 } });
    };

    return {
      find: _session,
      children: [
        { find: _classes },
        { find: _questions },
        { find: _responses }
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
