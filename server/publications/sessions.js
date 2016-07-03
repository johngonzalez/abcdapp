import {Sessions, Classes, Questions, Responses} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('sessions.list', function () {
    return Sessions.find({});
  });

  Meteor.publish('sessions.single', function (_id) {
    check(_id, String);
    return Sessions.find({_id}, {limit: 1});
  });

  Meteor.publishComposite('sessions.single.composite', function (sessionId) {
    check(sessionId, String);
    const owner = this.userId;

    const _session = () => {
      const options = { fields: { _id: 1, classId: 1 }, limit: 1 };
      return Sessions.find(sessionId, options);
    };

    const _classes = (session) => {
      const options = { fields: { _id: 1, isPublic: 1 }, limit: 1 };
      return Classes.find(session.classId, options);
    };

    const _questions = (classItem) => {
      const options = { fields: { _id: 1, classId: 1, questionSeq: 1 } };
      return Questions.find({classId: classItem._id}, options);
    };

    const _responses = (session) => Responses.find({sessionId: session._id, owner});

    return {
      find: _session,
      children: [
        { find: _classes, children: [ {find: _questions} ] },
        { find: _responses }
      ]
    };
  });
}
