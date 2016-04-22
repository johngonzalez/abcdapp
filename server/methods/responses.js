import {Responses} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'response.select'(questionId, responseId) {
      check(questionId, Number);
      check(responseId, Number);
      const createdAt = new Date();
      const response = {questionId, responseId, createdAt};
      Responses.insert(response);
    }
  });
}
