import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'response.select'(_id, classId, questionId, responseId) {
      check(_id, String);
      check(classId, String);
      check(questionId, String);
      check(responseId, Number);
      const owner = Meteor.userId();
      if (!owner) {
        throw new Meteor.Error('not-authorized');
      }
      const saving = true;
      const createdAt = new Date();
      const response = {_id, classId, questionId, responseId, createdAt, owner, saving};
      Collections.Responses.insert(response);
    }
  });
}
