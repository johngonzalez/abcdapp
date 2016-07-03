import {Questions, Responses} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const questionsList = function () {
  Meteor.publish('questions.list', function (classId) {
    check(classId, String);
    return Questions.find({classId});
  });
};

export const questionsResponsesList = function () {
  Meteor.publish('questionsResponses.list', function (classId, sessionId) {
    check(classId, String);
    check(sessionId, String);
    const owner = this.userId;
    return [
      Questions.find({classId}),
      Responses.find({sessionId, owner})
    ];
  });
};
