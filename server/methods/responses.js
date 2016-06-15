import {Responses} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'response.select'(_id, classId, questionId, responseId) {
      check(_id, String);
      check(classId, String);
      check(questionId, String);
      check(responseId, Number);
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      const createdAt = new Date();
      const owner = Meteor.userId();
      const response = {_id, classId, questionId, responseId, createdAt, owner};
      Meteor._sleepForMs(5000);
      Responses.insert(response);
    }
  });
}
