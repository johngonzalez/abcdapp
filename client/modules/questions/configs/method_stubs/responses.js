import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'response.select'(_id, sessionId, questionId, selected) {
      check(_id, String);
      check(sessionId, String);
      check(questionId, String);
      check(selected, Number);
      const owner = Meteor.userId();
      if (!owner) {
        throw new Meteor.Error('not-authorized');
      }
      const saving = true;
      const createdAt = new Date();
      const response = {sessionId, questionId, selected, createdAt, owner, saving};
      Collections.Responses.upsert(_id, { $set: response });
    }
  });
}
