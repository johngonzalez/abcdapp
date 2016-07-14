import {Questions, Responses} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('questions.list', function (classId) {
    check(classId, String);
    return Questions.find({classId});
  });

  Meteor.publishComposite('questionsResponses', function (sessionId, classId) {
    check(sessionId, String);
    check(classId, String);
    const owner = this.userId;

    const _questions = () => {
      const options = { fields: { _id: 1, classId: 1, questionSeq: 1 } };
      return Questions.find({classId}, options);
    };

    const _responses = () => {
      const options = { fields: { createdAt: 0 } };
      return Responses.find({sessionId, owner}, options);
    };

    return [
      { find: _questions },
      { find: _responses }
    ];
  });
}
